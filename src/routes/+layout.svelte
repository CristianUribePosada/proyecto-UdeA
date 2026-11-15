<script lang="ts">
  import './layout.css';
  import { fade } from 'svelte/transition';

  
  import type { LayoutProps } from './$types';
  import { page } from '$app/state';
  import { navigating } from '$app/state';
  import { MAIN_NAVIGATION, USER_ROLES, getBreadcrumbs } from '#lib';

  let { children }: LayoutProps = $props();

  // Control del menú desplegable móvil (hamburguesa)
  let isMobileMenuOpen = $state(false);
  let menuFrame = 0;

  // Animación de carga durante navegación en Svelte 5
  let isLoading = $derived(navigating.to !== null);
  let currentPath = $derived(page.url.pathname);
  let breadcrumbs = $derived(getBreadcrumbs(currentPath));

  /**
   * Agrupa la mutación del DOM del menú móvil en un único frame.
   * Evita escrituras secuenciales que provocan reflow forzado en el hilo principal.
   */
  function setMobileMenu(open: boolean) {
    if (menuFrame) cancelAnimationFrame(menuFrame);
    menuFrame = requestAnimationFrame(() => {
      isMobileMenuOpen = open;
      menuFrame = 0;
    });
  }

  function toggleMobileMenu() {
    setMobileMenu(!isMobileMenuOpen);
  }

  // Cerrar el menú móvil al navegar
  $effect(() => {
    if (currentPath) {
      isMobileMenuOpen = false;
    }
  });

  // Cerrar el menú con la tecla Escape (accesibilidad, sin listeners redundantes)
  $effect(() => {
    function onKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isMobileMenuOpen) setMobileMenu(false);
    }
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  });
</script>

<svelte:head>
  <title>Portal Web UdeA | Rediseño Oficial ResignUP</title>
  <meta name="description" content="Rediseño del portal oficial de la Universidad de Antioquia con navegación clara, rápida y accesible." />
  <!-- Preload del logo (LCP en páginas internas) con prioridad alta -->
  <link rel="preload" as="image" href="/logo-udea.webp" type="image/webp" fetchpriority="high" />
  <!-- El hero (campus-udea.webp) se precarga solo en la página de inicio, donde es el LCP -->
  <!-- Favicons for responsive devices -->
  <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
  <link rel="shortcut icon" href="/favicons/favicon.ico" />
  <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
  <link rel="manifest" href="/favicons/site.webmanifest" />
  <meta name="theme-color" content="#ffffff" />
  <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
</svelte:head>

<!-- Animación de carga fluida durante transiciones de navegación -->
{#if isLoading}
  <div class="loader-bar-container" aria-live="polite" aria-label="Cargando contenido">
    <div class="loader-bar-indicator"></div>
  </div>
{/if}

<!-- Barra Institucional Superior Oficial (Barra 1: se esconde al bajar) -->
<div class="top-gov-bar">
  <div class="flex items-center gap-4">
    <span class="font-bold tracking-wide">GOV.CO</span>
    <span class="text-xs opacity-75 hidden sm:inline">República de Colombia | Universidad de Antioquia</span>
  </div>
  <div class="flex items-center gap-4">
    <a href="/contacto">Atención a la ciudadanía</a>
    <a href="/tramites-servicios">Transparencia</a>
    <span class="px-2 py-0.5"></span>
  </div>
</div>

<!-- Barra del Logo y Roles (Barra 2: se esconde al bajar) -->
<header class="site-header">
  <div class="header-inner">
    <a href="/" class="brand-wrapper" title="Ir al Inicio del portal de la UdeA">
      <img src="/logo-udea.webp" alt="Universidad de Antioquia" class="header-logo" width="280" height="50" fetchpriority="high" />
    </a>

    <!-- Accesos Rápidos por Roles (Siempre visibles y optimizados para móviles) -->
    <nav class="role-bar" aria-label="Accesos por perfil institucional">
      <span class="role-label-title">Perfiles:</span>
      {#each USER_ROLES as role}
        <a 
          href={role.href} 
          class="role-link"
          title={role.description}
        >
          {role.label}
        </a>
      {/each}
    </nav>
  </div>
</header>

<!-- Contenedor Sticky: Barra 3 (Navegación) + Barra 4 (Breadcrumbs) bajan juntas con el usuario -->
<div class="sticky-nav-wrapper">
  <!-- Barra 3: Navegación Principal con Menú Hamburguesa en Móviles -->
  <nav class="main-nav" aria-label="Navegación principal">
    <div class="main-nav-inner">
      <!-- Indicador o Título móvil -->
      <span class="mobile-nav-title md:hidden font-bold text-sm tracking-wide">Menú Institucional</span>

      <!-- Botón de 3 Rayas (Hamburguesa) para versión móvil -->
      <button
        type="button"
        class="mobile-menu-btn md:hidden"
        onclick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-controls="primary-navigation"
        aria-label="Abrir o cerrar menú principal"
      >
        {#if isMobileMenuOpen}
          <!-- Icono de X para cerrar -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <!-- Icono de 3 Rayas (Hamburguesa) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>

      <!-- Lista de Enlaces: barra horizontal en PC, menú vertical desplegable en móviles -->
      <ul class="nav-links" id="primary-navigation" class:open={isMobileMenuOpen}>
        {#each MAIN_NAVIGATION as item}
          <li class="w-full md:w-auto">
            <a 
              href={item.href} 
              class="nav-item-link"
              class:active={currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))}
              onclick={() => isMobileMenuOpen = false}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>

  <!-- Barra 4: Migas de Pan / Breadcrumbs Clicables -->
  <nav class="breadcrumbs-bar" aria-label="Ruta de navegación">
    <div class="breadcrumbs-inner">
      {#each breadcrumbs as crumb, i}
        {#if i > 0}
          <span class="breadcrumb-separator" aria-hidden="true">›</span>
        {/if}
        {#if i === breadcrumbs.length - 1}
          <span class="breadcrumb-current" aria-current="page">{crumb.label}</span>
        {:else}
          <a href={crumb.href} class="breadcrumb-link">{crumb.label}</a>
        {/if}
      {/each}
    </div>
  </nav>
</div>


{#key currentPath}
  <main class="main-content" in:fade={{duration:150}} out:fade={{duration:150}}>
    {@render children()}
  </main>
{/key}

<!-- Pie de página Institucional Oficial -->
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-col">
      <h3>Universidad de Antioquia</h3>
      <p class="text-sm text-gray-300 leading-relaxed mb-3">
        Institución de educación superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.
      </p>
      <p class="text-xs text-emerald-200">
        Calle 67 N° 53 - 108 • Medellín, Colombia<br />
        Conmutador: (57 + 4) 219 8332
      </p>
    </div>

    <div class="footer-col">
      <h3>Accesos Principales</h3>
      <ul>
        <li><a href="/programas-academicos">Programas de Pregrado y Posgrado</a></li>
        <li><a href="/admisiones">Guía y Calendario de Admisiones</a></li>
        <li><a href="/tramites-servicios">Ventanilla Virtual y Certificados</a></li>
        <li><a href="/convocatorias">Convocatorias y Becas Docentes</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Atención y Sedes</h3>
      <ul>
        <li><a href="/contacto">Líneas de Atención Oficial</a></li>
        <li><a href="/contacto#sedes">Sedes en Medellín y Regiones</a></li>
        <li><a href="/contacto#pqrs">Formulario Único de PQRSDF</a></li>
        <li><a href="/contacto#seguridad">Seguridad y Emergencias en Campus</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Transparencia y Legal</h3>
      <ul>
        <li><a href="/tramites-servicios#reglamento">Reglamento Estudiantil</a></li>
        <li><a href="/tramites-servicios#calendario">Calendario Académico Oficial</a></li>
        <li><a href="https://www.udea.edu.co" target="_blank" rel="noreferrer">Portal Clásico UdeA (Oficial)</a></li>
        <li><span class="text-xs text-emerald-300">ResignUP 2026</span></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2026 Universidad de Antioquia UdeA — Proyecto de Rediseño del portal de la UdeA.</p>
    <p class="text-xs">Este proyecto es solo con fines académicos.</p>
  </div>
</footer>
