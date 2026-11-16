# ResignUP: Rediseño del Portal Web de la UdeA

<div align="center">

![Logotipo UdeA](static/logo-udea.webp)

**Modernización del Front-End, Optimización de Rendimiento y Arquitectura de Interfaz para el Portal Institucional de la Universidad de Antioquia**

[![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=SvelteKit&logoColor=white)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Lighthouse Performance](https://img.shields.io/badge/Desktop%20Perf-99%2F100-success?style=for-the-badge&logo=google-chrome)](https://developer.chrome.com/docs/lighthouse)
[![Best Practices](https://img.shields.io/badge/Best%20Practices-100%2F100-success?style=for-the-badge)](https://pagespeed.web.dev/)

</div>

---

## 📋 Descripción del Proyecto

**ResignUP** es una iniciativa de desarrollo front-end orientada a resolver las deficiencias críticas de usabilidad, arquitectura de información y rendimiento detectadas en el portal web oficial de la Universidad de Antioquia (`www.udea.edu.co`).

El proyecto surge de un análisis exhaustivo respaldado por técnicas de elicitación (encuestas a la comunidad universitaria, observación directa y listas de verificación), identificando problemas como:

- **Sobrecarga visual** en el encabezado (mezcla de barras estatales GOV.CO e institucionales).
- **Oferta académica confusa** oculta bajo siglas ambiguas (ej. _MED_, _REG_, _GUI_).
- **Elementos interactivos inertes** (componentes visuales que simulaban botones pero no producían ninguna acción).
- **Ineficacia en el buscador interno** y tiempos de respuesta elevados que afectaban la experiencia móvil.

A través de una arquitectura moderna basada en **SvelteKit**, el proyecto reestructura la interfaz para garantizar que cualquier miembro de la comunidad (aspirantes, estudiantes, docentes, egresados y personal administrativo) pueda acceder a la información crucial en **máximo 3 clics**, cumpliendo estrictos estándares de accesibilidad y optimización móvil.

---

## 🚀 Logros Técnicos y Métricas de Rendimiento

Tras la implementación de la nueva interfaz y las optimizaciones de la ruta crítica de renderizado, el sitio alcanzó puntuaciones sobresalientes en las auditorías de **Google Lighthouse y PageSpeed Insights**:

| Métrica / Categoría                | Dispositivo Móvil | Ordenador (Desktop) |
| :--------------------------------- | :---------------: | :-----------------: |
| **Rendimiento General**            |   **80 / 100**    |    **99 / 100**     |
| **Accesibilidad**                  |         —         |    **96 / 100**     |
| **Prácticas Recomendadas**         |         —         |    **100 / 100**    |
| **SEO**                            |         —         |    **100 / 100**    |
| **First Contentful Paint (FCP)**   |      Óptimo       |      **0.2 s**      |
| **Largest Contentful Paint (LCP)** |      Óptimo       |      **0.5 s**      |
| **Total Blocking Time (TBT)**      |      Óptimo       |      **0 ms**       |

### Optimizaciones Clave Realizadas:

1. **Gestión de CSS Crítico y Asíncrono:** Ajuste de la carga de estilos para evitar bloqueos en el renderizado inicial (`FCP`/`LCP`), manteniendo el desplazamiento acumulado (`CLS`) en 0.
2. **Fachada de Carga Diferida (Click-to-Load) para YouTube:** Reemplazo de iframes directos por miniaturas interactivas con el dominio de privacidad mejorada (`youtube-nocookie.com`), eliminando la carga prematura de cookies de terceros y elevando las prácticas recomendadas a 100.
3. **Estructura Modular Front-End:** Organización clara por rutas, componentes y hojas de estilo específicas para cada sección institucional.

---

## 🏛️ Arquitectura de la Solución y Secciones

El portal rediseñado contempla los siguientes módulos y flujos principales:

- **Página de Inicio (`/`):** Reestructurada para mostrar accesos directos visibles (admisiones, programas académicos y contacto) sin menús anidados profundos.
- **Programas Académicos (`/programas-academicos`):** Eliminación de siglas ambiguas por nombres claros y descriptivos, con tarjetas interactivas y filtrado dinámico.
- **Admisiones (`/admisiones`):** Guías claras de ingreso, inscripción y pago en un flujo de máximo 3 clics.
- **Convocatorias (`/convocatorias`):** Espacio unificado para actualidad, noticias institucionales y avisos.
- **Trámites y Servicios (`/tramites-servicios`):** Centralización de certificados y solicitudes para estudiantes y egresados.
- **Contacto (`/contacto`):** Directorio unificado que evita resultados descontextualizados.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

- **Framework:** [SvelteKit](https://svelte.dev/) (Entorno de desarrollo rápido y óptimo para aplicaciones web institucionales de una sola página).
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) para un tipado estricto y mantenibilidad del código.
- **Empaquetador / Compilador:** [Vite](https://vitejs.dev/).
- **Gestor de Paquetes:** `bun` / `npm`.
- **Herramientas de Diagnóstico:** Google Lighthouse, PageSpeed Insights.

---

## ⚙️ Guía de Instalación y Ejecución Local

Sigue estos pasos para clonar, instalar y poner en marcha el proyecto en tu entorno de desarrollo local:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/proyecto-udea.git
   cd proyecto-udea
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   # o si utilizas Bun:
   bun install
   ```

3. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   # o
   bun dev
   ```

4. **Abre la aplicación en tu navegador:**
   Visita `http://localhost:5173` para interactuar con el portal.

5. **Construir para producción:**
   ```bash
   npm run build
   # o
   bun run build
   ```

---

## 👥 Equipo de Trabajo (ResignUp)

Proyecto desarrollado por el equipo de ingeniería para la asignatura _Definición y Análisis de Requisitos_:

- Cristian Uribe Posada
- Samuel Álvarez
- Dilan Andrés Jaramillo Rico
- Juan David Mosquera
- Laura Quiroz Blandón

**Institución Universitaria ITM**
