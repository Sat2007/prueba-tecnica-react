# Panel de Contenido por Estación

Prueba técnica React — panel de estaciones con sus servicios, construido con Vite, React, TypeScript, Tailwind, y React Query.

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (viene incluido con Node.js)

## Instalación

Clona el repositorio y entra a la carpeta del proyecto:

```bash
git clone https://github.com/Sat2007/prueba-tecnica-react.git
cd prueba-tecnica-react

```

Instala las dependencias:

```bash
npm install
```

## Correr el proyecto en desarrollo

```bash
npm run dev
```

Esto levanta el servidor de desarrollo de Vite. Por defecto queda disponible en:

```
http://localhost:5173
```

La terminal muestra la URL exacta al iniciar — si el puerto 5173 está ocupado, Vite usa automáticamente el siguiente disponible (5174, 5175, etc.).

## Correr los tests

```bash
npm run test
```

## Construir para producción

```bash
npm run build
```

Genera los archivos optimizados en la carpeta `dist/`.

Para previsualizar esa build localmente:

```bash
npm run preview
```

## Notas del proyecto

- No requiere backend ni base de datos — los datos se simulan en memoria (`services/`), con delay y errores aleatorios para imitar condiciones de red reales.
- No requiere variables de entorno para funcionar en local.

## Estructura del proyecto

```
src/
  components/   → componentes reutilizables de UI
  hooks/        → lógica de estado y data fetching (React Query)
  mappers/      → transformación de modelos de dominio a modelos de UI
  pages/        → páginas conectadas a las rutas
  services/     → simulación de fetch de datos
  types/        → definiciones de tipos (dominio y UI)
  utils/        → utilidades compartidas (delay, simulación de red)
```
