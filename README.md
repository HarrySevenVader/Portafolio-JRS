# Portafolio de Jarol Riquelme

Base del nuevo portafolio, hecha con React, TypeScript y Vite. El diseño usa una paleta gris clara, tipografía editorial y una identidad de terminal en el encabezado.

## Ejecutar

```bash
npm install
npm run dev
```

## Estructura

```text
src/
  App.tsx                 Orden de las secciones
  main.tsx                Entrada de React y estilos
  components/             Cabecera, pie y título compartido
  sections/               Home, proyectos, stacks, experiencia y contacto
  data/portfolio.ts       Contenido editable y enlaces
  styles/                 Estilos generales, secciones y responsividad
public/
  assets/files/           CV existente
  assets/logo-skull-transparent.png  Logo del encabezado
  logo-skull-transparent.ico         Logo de la pestaña
```

La página sigue este orden: inicio y sobre mí, proyectos publicados, stack de desarrollo, stack de datos, experiencia profesional, contacto y footer.

Los textos, enlaces, proyectos y tecnologías se editan en `src/data/portfolio.ts` o en la sección correspondiente. Esta es una base visual y de contenido; antes de publicar conviene revisar los textos finales y la presentación en distintos dispositivos.

## Comprobar

```bash
npm run lint
npm run build
```

La compilación genera `dist/`, configurado para Firebase Hosting en `firebase.json`.
