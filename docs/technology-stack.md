# Stack de tecnologías

La sección vive en `src/sections/StackSection.tsx`; sus estilos están en `src/styles/technology-stack.css`. El título, la descripción principal y el enlace `#desarrollo` se conservan.

Hay seis pestañas accesibles por clic o teclado. Desarrollo Web, DevOps y Cloud y Análisis de Datos presentan tarjetas agrupadas. Programación, Desarrollo Mobile e IA Generativa tienen inventarios propios. Scripting / Bash fue retirado del menú.

## Editar las tarjetas

`webTechnologyGroups` contiene Frontend, Backend y Bases de datos. Cada grupo declara `id`, `title`, `description` y `technologies`. Para añadir una tarjeta, agrega un objeto:

```tsx
{
  id: "typescript",
  title: "TypeScript",
  subtitle: "Tipado",
  icon: "typescript",
}
```

Los iconos son SVG locales en `public/assets/stack-web/`; consulta su procedencia y licencias en el NOTICE de esa carpeta. Los elementos sin logotipo utilizan `symbol` con uno de los símbolos SVG del componente, en lugar de `icon`.

Desarrollo Web ya no incluye las tarjetas de despliegue ni HTTP Request / Response.

`programmingLanguages` controla Python, C / C++, JavaScript, TypeScript y SQL. HTML y CSS se presentan en Frontend; React, Next.js y Node.js no se clasifican como lenguajes. `mobileTechnologies` contiene Dart y Flutter; `generativeAiTools` contiene Claude Code, Codex y ChatGPT.

## Análisis de Datos

`dataTechnologyGroups` contiene cuatro grupos, priorizando las herramientas base antes de las plataformas especializadas:

1. Consulta y preparación: SQL, Excel y Power Query.
2. Análisis y automatización con Python: Python, pandas, NumPy y Playwright.
3. Visualización y reportes: Power BI.
4. Plataformas y datos maestros: Google Cloud BigQuery, Stibo Systems y Navicat.

Es un orden editorial para el portafolio, no una clasificación universal de importancia. pandas y NumPy son bibliotecas; Playwright se incluye por automatización web, no como biblioteca analítica. Stibo Systems se presenta en el contexto de Master Data Management (MDM), sin atribuir un producto concreto.

`dataPractices` contiene las capacidades de trabajo separadas de las herramientas: ETL, limpieza y validación, análisis exploratorio, tendencias, levantamiento de productos y reportería. El levantamiento se presenta como trabajo con atributos y catálogo; ajusta esa descripción si tu experiencia tuvo otro alcance.

Para editar esta pestaña, cambia los objetos de esos dos bloques. Las tarjetas se generan con la misma plantilla de Desarrollo Web. Los logos de datos son SVG locales; el NOTICE distingue los archivos oficiales de las representaciones comunitarias. Stibo Systems conserva su logotipo horizontal sobre el texto de la tarjeta.

## DevOps y Cloud

`cloudTechnologyGroups` reutiliza las tarjetas y la cuadrícula existentes:

1. Versionado y automatización: Git, GitHub y GitHub Actions.
2. Contenedores y orquestación: Docker y Kubernetes.
3. Despliegue y servicios cloud: Vercel, Render, Supabase y Google Cloud.

La selección recoge el uso de Git indicado por el autor, el despliegue de Gustito y la infraestructura documentada de ConstrUTEM. Docker Compose, GitHub Actions y GKE están configurados en ese proyecto académico; esto no acredita que el autor haya administrado individualmente toda su infraestructura. Consulta `docs/reports/construtem-despacho-2026-10-17.md` para el alcance de la revisión. Google Cloud incluye también BigQuery, declarado por el autor en su experiencia de datos.

No se añaden plataformas ni niveles de dominio deducidos de un cargo. Los logotipos son SVG locales y sus fuentes constan en el NOTICE.

## Distribución

`TechnologyCards` es la única plantilla de tarjetas y se reutiliza en todos los grupos. CSS Grid usa `repeat(auto-fill, minmax(min(100%, 180px), 1fr))`: añade columnas según el espacio, pasa las tarjetas restantes a una nueva fila y permite una sola columna en pantallas estrechas. En móvil, el mínimo se reduce a 145 px.

No hay conectores, coordenadas absolutas, lienzos de ancho fijo ni desplazamiento horizontal interno. Las tarjetas son contenido informativo, no botones.

El contenido de cada categoría entra desde la izquierda en 220 ms con `transform` y `opacity`: 14 px en escritorio y 8 px en móvil. El contenedor interior usa `key={selectedId}` para repetir la animación al cambiar de categoría; el marco y el panel accesible permanecen montados. No hay esperas ni cola de transiciones. Con `prefers-reduced-motion: reduce`, el contenido aparece directamente. La altura sigue dependiendo del contenido de cada categoría.

## Verificación

```sh
node --test tests/technology-stack.test.mjs
npm run lint
npm run build
```

Las pruebas comprueban el inventario vigente, la clasificación de lenguajes, la separación de herramientas y prácticas de datos y la disponibilidad de iconos locales. La distribución adaptable y los controles de teclado se verifican en el navegador.
