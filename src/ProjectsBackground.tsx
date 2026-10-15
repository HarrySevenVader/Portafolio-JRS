import { useEffect, useRef } from "react";

type ProjectsBackgroundProps = {
  /** true para probar desde main.tsx; false para usar dentro de una sección. */
  fullscreen?: boolean;
  /** 1 es la velocidad original; 0 deja el fondo estático. */
  speed?: number;
  className?: string;
};

type Ribbon = {
  center: number;
  amplitude: number;
  thickness: number;
  phase: number;
  frequency: number;
  opacity: number;
};

type Point = { x: number; y: number; perspective: number };

const TAU = Math.PI * 2;
const FRAME_INTERVAL = 1000 / 30;

// Las bandas quedan en los bordes para reservar el centro al contenido.
const RIBBONS: readonly Ribbon[] = [
  { center: 0.08, amplitude: 0.105, thickness: 0.18, phase: 0.6, frequency: 0.8, opacity: 0.65 },
  { center: 0.21, amplitude: 0.1, thickness: 0.14, phase: 2.8, frequency: 0.7, opacity: 0.9 },
  { center: 0.83, amplitude: 0.11, thickness: 0.18, phase: 2.1, frequency: 0.65, opacity: 0.7 },
  { center: 0.96, amplitude: 0.085, thickness: 0.2, phase: 0.2, frequency: 0.6, opacity: 0.95 },
];

/** Proyecta un punto de la trama sobre una superficie ondulada. */
function getRibbonPoint(
  u: number,
  v: number,
  ribbon: Ribbon,
  time: number,
  width: number,
  height: number,
): Point {
  const phase = u * TAU * ribbon.frequency + ribbon.phase + time * 0.22;
  const perspective = 0.3 + 0.7 * Math.pow(Math.abs(u - 0.5) * 2, 1.25);
  const center = ribbon.center
    + ribbon.amplitude * Math.sin(phase)
    + 0.018 * Math.sin(u * TAU * 1.5 - time * 0.12 + ribbon.phase);

  return {
    x: width * (u * 1.16 - 0.08 + v * 0.045 * Math.sin(phase + 0.8)),
    y: height * (center + v * ribbon.thickness * 0.5 * perspective),
    perspective,
  };
}

function drawRibbon(
  context: CanvasRenderingContext2D,
  ribbon: Ribbon,
  time: number,
  width: number,
  height: number,
) {
  const steps = 90;
  const columns = Math.min(76, Math.max(24, Math.ceil(width / 24)));
  const rows = width < 600 ? 14 : 18;

  context.save();
  context.globalAlpha = ribbon.opacity;

  // Una superficie gris suave aporta volumen detrás de los puntos blancos.
  const shading = context.createLinearGradient(0, 0, width * 0.25, height);
  shading.addColorStop(0, "rgba(186, 192, 194, 0.38)");
  shading.addColorStop(0.32, "rgba(231, 233, 233, 0.5)");
  shading.addColorStop(0.62, "rgba(205, 210, 211, 0.35)");
  shading.addColorStop(1, "rgba(248, 249, 248, 0.6)");

  context.beginPath();
  for (let step = 0; step <= steps; step += 1) {
    const point = getRibbonPoint(step / steps, -1, ribbon, time, width, height);
    if (step === 0) context.moveTo(point.x, point.y);
    else context.lineTo(point.x, point.y);
  }
  for (let step = steps; step >= 0; step -= 1) {
    const point = getRibbonPoint(step / steps, 1, ribbon, time, width, height);
    context.lineTo(point.x, point.y);
  }
  context.closePath();
  context.fillStyle = shading;
  context.fill();

  // La trama converge en el centro: los puntos se hacen más pequeños allí.
  for (let row = 0; row < rows; row += 1) {
    const v = (row / (rows - 1)) * 2 - 1;
    const edgeFade = Math.sin((row / (rows - 1)) * Math.PI);

    for (let column = 0; column < columns; column += 1) {
      const u = (column + (row % 2) * 0.35) / (columns - 1);
      const point = getRibbonPoint(u, v, ribbon, time, width, height);
      const radiusX = (width / columns) * 0.39 * point.perspective;
      const radiusY = Math.min(
        radiusX * 0.43,
        (height * ribbon.thickness / rows) * 0.34 * point.perspective,
      );
      const tilt = 0.18 * Math.cos(u * TAU + ribbon.phase + time * 0.16);

      context.globalAlpha = ribbon.opacity * (0.2 + edgeFade * 0.8);

      // Un borde inferior tenue hace que cada punto parezca una perforación.
      context.fillStyle = "rgba(165, 174, 177, 0.17)";
      context.beginPath();
      context.ellipse(point.x, point.y + 0.9, radiusX, radiusY, tilt, 0, TAU);
      context.fill();

      context.fillStyle = "rgba(255, 255, 255, 0.9)";
      context.beginPath();
      context.ellipse(point.x, point.y, radiusX, radiusY, tilt, 0, TAU);
      context.fill();
    }
  }

  context.restore();
}

export default function ProjectsBackground({
  fullscreen = true,
  speed = 1,
  className = "",
}: ProjectsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationSpeed = Number.isFinite(speed) ? Math.min(4, Math.max(0, speed)) : 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastFrameTime = 0;
    let lastTickTime = 0;
    let elapsedTime = 0;
    let isVisible = true;
    let isDisposed = false;

    function draw(time: number) {
      if (!context || !width || !height) return;
      context.clearRect(0, 0, width, height);
      for (const ribbon of RIBBONS) drawRibbon(context, ribbon, time, width, height);
    }

    function canAnimate() {
      return !isDisposed && isVisible && !document.hidden
        && !motionPreference.matches && animationSpeed > 0 && width > 0 && height > 0;
    }

    function animate(timestamp: number) {
      if (!canAnimate()) return;

      // El tiempo del movimiento y el límite de dibujo se calculan por separado.
      if (lastTickTime) elapsedTime += Math.min(timestamp - lastTickTime, 100) / 1000;
      lastTickTime = timestamp;
      const delta = timestamp - lastFrameTime;

      if (delta >= FRAME_INTERVAL) {
        lastFrameTime = timestamp - (delta % FRAME_INTERVAL);
        draw(elapsedTime * animationSpeed);
      }

      animationFrame = window.requestAnimationFrame(animate);
    }

    function syncAnimation() {
      window.cancelAnimationFrame(animationFrame);
      lastFrameTime = 0;
      lastTickTime = 0;
      draw(elapsedTime * animationSpeed);
      if (canAnimate()) animationFrame = window.requestAnimationFrame(animate);
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      // La resolución se limita para mantener una animación ligera en móvil.
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      syncAnimation();
    });

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      syncAnimation();
    });

    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    document.addEventListener("visibilitychange", syncAnimation);
    motionPreference.addEventListener("change", syncAnimation);

    return () => {
      isDisposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", syncAnimation);
      motionPreference.removeEventListener("change", syncAnimation);
    };
  }, [animationSpeed]);

  return (
    <div
      className={`projects-wave-background${fullscreen ? " projects-wave-background--fullscreen" : ""}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      <style>{PROJECTS_BACKGROUND_CSS}</style>
      <canvas className="projects-wave-background__canvas" ref={canvasRef} />
      <div className="projects-wave-background__light" />
    </div>
  );
}

// CSS encapsulado en este mismo TSX. Las clases solo afectan a este fondo.
const PROJECTS_BACKGROUND_CSS = `
  .projects-wave-background {
    position: absolute;
    inset: 0;
    overflow: hidden;
    isolation: isolate;
    pointer-events: none;
    background: linear-gradient(135deg, #ecece9 0%, #f7f8f6 38%, #fff 58%, #ecece9 100%);
  }

  .projects-wave-background--fullscreen {
    position: fixed;
  }

  .projects-wave-background__canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  .projects-wave-background__light {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 49%, rgba(255, 255, 255, 0.58) 0%, transparent 68%);
  }

  .projects-wave-background::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, #ecece9 0%, transparent 8%, transparent 92%, #ecece9 100%);
  }

  @media (max-width: 760px) {
    .projects-wave-background__light {
      background: radial-gradient(ellipse at 50% 48%, rgba(255, 255, 255, 0.68) 0%, transparent 73%);
    }
  }
`;
