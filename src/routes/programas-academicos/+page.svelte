<script lang="ts">
  import './programas.css';
  import {
    ACADEMIC_PROGRAMS,
    filterPrograms,
    type AcademicLevel,
    type CampusLocation
  } from './programas';
  import { page } from '$app/state';

  let searchTerm = $state('');
  let selectedLevel = $state<AcademicLevel>('todos');
  let selectedLocation = $state<CampusLocation>('todos');

  // Si viene con parámetro en URL, ej: ?sede=medellin o ?search=medicina
  $effect(() => {
    const sedeParam = page.url.searchParams.get('sede');
    const searchParam = page.url.searchParams.get('search');
    if (sedeParam === 'medellin') selectedLocation = 'medellin';
    if (sedeParam === 'regiones') selectedLocation = 'regiones';
    if (searchParam) searchTerm = searchParam;
  });

  let filteredPrograms = $derived(
    filterPrograms(ACADEMIC_PROGRAMS, searchTerm, selectedLevel, selectedLocation)
  );

  function resetFilters() {
    searchTerm = '';
    selectedLevel = 'todos';
    selectedLocation = 'todos';
  }
</script>

<svelte:head>
  <title>Programas Académicos | Oferta Oficial Universidad de Antioquia</title>
</svelte:head>

<div class="page-container">
  <header class="page-header">
    <h1 class="page-title">Oferta de Programas Académicos</h1>
    <p class="page-description">
      Consulta carreras de pregrado, posgrados y cursos de formación continua en Medellín y las sedes regionales con información transparente, requisitos unificados y sin siglas confusas.
    </p>
  </header>

  <!-- Panel de Búsqueda y Filtros Directos (HU_UDEA 02) -->
  <section class="filter-panel" aria-label="Filtros de oferta académica">
    <div class="filter-grid">
      <div class="filter-group">
        <label for="search-prog" class="filter-label">Buscar por nombre o facultad:</label>
        <input
          id="search-prog"
          type="search"
          class="filter-search-input"
          placeholder="ej. Ingeniería de Sistemas, Medicina..."
          bind:value={searchTerm}
        />
      </div>

      <div class="filter-group">
        <label for="level-select" class="filter-label">Nivel de Formación:</label>
        <select id="level-select" class="filter-select" bind:value={selectedLevel}>
          <option value="todos">Todos los niveles</option>
          <option value="pregrado">Pregrado (Carreras profesionales)</option>
          <option value="posgrado">Posgrado (Especializaciones, Maestrías, Doctorados)</option>
          <option value="educacion-continua">Educación Continua y Diplomados</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="loc-select" class="filter-label">Sede / Ubicación:</label>
        <select id="loc-select" class="filter-select" bind:value={selectedLocation}>
          <option value="todos">Todas las sedes</option>
          <option value="medellin">Programas en Medellín</option>
          <option value="regiones">Programas en Regiones (Seccionales)</option>
          <option value="virtual">Modalidad Virtual</option>
        </select>
      </div>
    </div>
  </section>

  <!-- Metadatos de la lista -->
  <div class="results-meta">
    <span>
      Mostrando <strong>{filteredPrograms.length}</strong> programa(s) disponible(s)
    </span>
    {#if searchTerm || selectedLevel !== 'todos' || selectedLocation !== 'todos'}
      <button 
        type="button" 
        class="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
        onclick={resetFilters}
      >
        Limpiar todos los filtros
      </button>
    {/if}
  </div>

  <!-- Listado de Programas -->
  {#if filteredPrograms.length > 0}
    <div class="programs-list">
      {#each filteredPrograms as program}
        <article class="program-card">
          <div>
            <div class="program-badges">
              <span class="badge-level">{program.levelLabel}</span>
              <span class="badge-location">{program.locationLabel}</span>
            </div>
            <h2 class="program-name">{program.name}</h2>
            <div class="program-faculty">{program.faculty}</div>
            <p class="program-desc">{program.description}</p>
          </div>

          <div>
            <div class="program-specs">
              <div class="spec-item">
                <span class="spec-label">Duración</span>
                <span class="spec-val">{program.duration}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Modalidad</span>
                <span class="spec-val">{program.modality}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Código SNIES</span>
                <span class="spec-val">{program.snies}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Admisiones</span>
                <span class="spec-val text-emerald-700">Verificada</span>
              </div>
            </div>

            <div class="card-actions">
              <a href="/admisiones" class="btn-detail">
                Ver Guía de Admisión →
              </a>
              <a href="/contacto" class="btn-admisiones" title="Preguntar por este programa">
                Contacto
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <h3 class="text-lg font-bold text-gray-700 mb-2">No se encontraron programas con esos criterios</h3>
      <p class="text-sm text-gray-500 mb-4">
        Prueba cambiando las palabras clave de búsqueda o seleccionando "Todas las sedes" o "Todos los niveles".
      </p>
      <button 
        type="button" 
        class="px-4 py-2 bg-emerald-800 text-white rounded font-bold text-sm hover:bg-emerald-900"
        onclick={resetFilters}
      >
        Restablecer filtros
      </button>
    </div>
  {/if}
</div>
