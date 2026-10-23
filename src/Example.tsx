import { memo, useEffect, useRef, useState, type CSSProperties } from "react";
import "./styles/example.css";

// Adaptado de Uiverse.io por whoisyourdeadie:
// https://uiverse.io/whoisyourdeadie/foolish-rabbit-13
const COLUMN_SPACING = 25;

// Se conservan las 40 combinaciones de velocidad y desfase del CSS original.
const COLUMN_TIMINGS = [
  { delay: -2.5, duration: 3 },
  { delay: -3.2, duration: 4 },
  { delay: -1.8, duration: 2.5 },
  { delay: -2.9, duration: 3.5 },
  { delay: -1.5, duration: 3 },
  { delay: -3.8, duration: 4.5 },
  { delay: -2.1, duration: 2.8 },
  { delay: -2.7, duration: 3.2 },
  { delay: -3.4, duration: 3.8 },
  { delay: -1.9, duration: 2.7 },
  { delay: -3.6, duration: 4.2 },
  { delay: -2.3, duration: 3.1 },
  { delay: -3.1, duration: 3.6 },
  { delay: -2.6, duration: 2.9 },
  { delay: -3.7, duration: 4.1 },
  { delay: -2.8, duration: 3.3 },
  { delay: -3.3, duration: 3.7 },
  { delay: -2.2, duration: 2.6 },
  { delay: -3.9, duration: 4.3 },
  { delay: -2.4, duration: 3.4 },
  { delay: -1.7, duration: 2.4 },
  { delay: -3.5, duration: 3.9 },
  { delay: -2, duration: 3 },
  { delay: -4, duration: 4.4 },
  { delay: -1.6, duration: 2.3 },
  { delay: -3, duration: 3.5 },
  { delay: -3.8, duration: 4 },
  { delay: -2.5, duration: 2.8 },
  { delay: -3.2, duration: 3.6 },
  { delay: -2.7, duration: 3.2 },
  { delay: -1.8, duration: 2.7 },
  { delay: -3.6, duration: 4.1 },
  { delay: -2.1, duration: 3.1 },
  { delay: -3.4, duration: 3.7 },
  { delay: -2.8, duration: 2.9 },
  { delay: -3.7, duration: 4.2 },
  { delay: -2.3, duration: 3.3 },
  { delay: -1.9, duration: 2.5 },
  { delay: -3.5, duration: 3.8 },
  { delay: -2.6, duration: 3.4 },
] as const;

const CHARACTERS = {
  odd: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン123456789",
  even: "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴァィゥェォャュョッABCDEFGHIJKLMNOPQRSTUVWXYZ",
  third: "アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン0987654321",
  fourth: "ンヲロヨモホノトソコオレメヘネテセケエルユムフヌツスクウリミヒニチシキイワラヤマハナタサカア",
  fifth: "ガザダバパギジヂビピグズヅブプゲゼデベペゴゾドボポヴァィゥェォャュョッ!@#$%^&*()_+-=[]{}|;:,.<>?",
} as const;

type MatrixColumnStyle = CSSProperties & {
  "--matrix-left": string;
  "--matrix-delay": string;
  "--matrix-duration": string;
};

function getColumnCharacters(index: number): string {
  // Cada bloque original reinicia sus selectores nth-child después de 40 columnas.
  const columnNumber = (index % COLUMN_TIMINGS.length) + 1;

  // El orden respeta la prioridad de las reglas originales: 5n, 4n, 3n, par/impar.
  if (columnNumber % 5 === 0) return CHARACTERS.fifth;
  if (columnNumber % 4 === 0) return CHARACTERS.fourth;
  if (columnNumber % 3 === 0) return CHARACTERS.third;
  return columnNumber % 2 === 0 ? CHARACTERS.even : CHARACTERS.odd;
}

const Example = memo(function Example() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columnCount, setColumnCount] = useState<number>(COLUMN_TIMINGS.length);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Solo se actualiza React cuando cambia el ancho; la caída la anima CSS.
    const observer = new ResizeObserver(([entry]) => {
      setColumnCount(Math.ceil(entry.contentRect.width / COLUMN_SPACING));
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="matrix-example"
      role="img"
      aria-label="Fondo Matrix animado con columnas de caracteres verdes sobre negro"
    >
      <div className="matrix-container" ref={containerRef} aria-hidden="true">
        {Array.from({ length: columnCount }, (_, index) => {
          const timing = COLUMN_TIMINGS[index % COLUMN_TIMINGS.length];
          const style: MatrixColumnStyle = {
            "--matrix-left": `${index * COLUMN_SPACING}px`,
            "--matrix-delay": `${timing.delay}s`,
            "--matrix-duration": `${timing.duration}s`,
          };

          return (
            <div
              className="matrix-column"
              key={index}
              data-characters={getColumnCharacters(index)}
              style={style}
            />
          );
        })}
      </div>
    </div>
  );
});

export default Example;
