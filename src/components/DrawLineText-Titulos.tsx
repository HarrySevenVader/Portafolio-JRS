import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type DrawLineTextProps = {
  text: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  strokeWidth?: number;
  accent?: { text: string; color: string };
};

type TextBounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const SVG_FONT_SIZE = 60;

export function DrawLineText({
  text,
  delay = 0,
  duration = 1,
  stagger = 0.04,
  strokeWidth = 1.5,
  accent,
}: DrawLineTextProps) {
  const accentStart = accent && text.includes(accent.text)
    ? Array.from(text.slice(0, text.indexOf(accent.text))).length
    : -1;
  const accentEnd = accentStart + Array.from(accent?.text ?? "").length;
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [bounds, setBounds] = useState<TextBounds | null>(null);

  useGSAP(
    (_context, contextSafe) => {
      if (!contextSafe) return;

      let disposed = false;
      let observer: IntersectionObserver | undefined;

      const media = gsap.matchMedia();

      const prepare = contextSafe(() => {
        const wrapper = wrapperRef.current;
        const svg = svgRef.current;

        if (!wrapper || !svg) return;

        const letters = Array.from(
          svg.querySelectorAll<SVGTextElement>("[data-letter]"),
        );

        let cursor = 0;

        letters.forEach((letter) => {
          letter.setAttribute("x", String(cursor));
          cursor += letter.getComputedTextLength();
        });

        const box = svg.getBBox();
        const padding = strokeWidth + 2;

        const left = Math.min(0, box.x);
        const right = Math.max(cursor, box.x + box.width);

        setBounds({
          x: left - padding,
          y: box.y - padding,
          width: Math.max(1, right - left + padding * 2),
          height: Math.max(1, box.height + padding * 2),
        });

        // Los espacios ocupan ancho, pero no se animan.
        const visibleLetters = letters.filter(
          (letter) => Boolean(letter.textContent?.trim()),
        );

        media.add(
          "(prefers-reduced-motion: no-preference)",
          () => {
            visibleLetters.forEach((letter) => {
              const length = letter.getComputedTextLength() * 8;

              gsap.set(letter, {
                strokeDasharray: length,
                strokeDashoffset: length,
                fillOpacity: 0,
                strokeOpacity: 1,
              });
            });

            const timeline = gsap.timeline({
              paused: true,
              delay,
            });

            timeline
              .to(visibleLetters, {
                strokeDashoffset: 0,
                duration,
                ease: "none",
                stagger,
              })
              .to(visibleLetters, {
                fillOpacity: 1,
                strokeOpacity: 0,
                duration: 0.3,
                ease: "power2.out",
                stagger: {
                  amount: 0.1,
                  from: "center",
                },
              });

            observer = new IntersectionObserver(
              ([entry]) => {
                if (!entry.isIntersecting) return;

                timeline.play();
                observer?.disconnect();
              },
              { threshold: 0.25 },
            );

            observer.observe(wrapper);

            return () => observer?.disconnect();
          },
        );
      });

      // Esperamos a las fuentes antes de medir las letras.
      void document.fonts.ready.then(() => {
        if (!disposed) prepare();
      });

      return () => {
        disposed = true;
        observer?.disconnect();
        media.revert();
      };
    },
    {
      scope: wrapperRef,
      dependencies: [text, delay, duration, stagger, strokeWidth],
      revertOnUpdate: true,
    },
  );

  return (
    <span
      ref={wrapperRef}
      className="draw-line-text"
      style={{
        width: bounds
          ? `${bounds.width / SVG_FONT_SIZE}em`
          : undefined,
      }}
    >
      <span className="draw-line-text__accessible">
        {text}
      </span>

      <svg
        ref={svgRef}
        aria-hidden="true"
        focusable="false"
        className="draw-line-text__svg"
        viewBox={
          bounds
            ? `${bounds.x} ${bounds.y} ${bounds.width} ${bounds.height}`
            : undefined
        }
        width={bounds?.width ?? 1}
        height={bounds?.height ?? 1}
        style={{
          visibility: bounds ? "visible" : "hidden",
        }}
      >

        {Array.from(text).map((character, index) => (
          <text
            key={`${text}-${index}`}
            data-letter
            x="0"
            y={SVG_FONT_SIZE}
            fontSize={SVG_FONT_SIZE}
            xmlSpace="preserve"
            style={{
              strokeWidth,
              color: accent && index >= accentStart && index < accentEnd
                ? accent.color
                : undefined,
              strokeOpacity: 0,
            }}
          >
            {character}
          </text>
        ))}
      </svg>
    </span>
  );
}
