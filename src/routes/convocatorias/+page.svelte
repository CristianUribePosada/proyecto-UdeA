<script lang="ts">
  import './convocatorias.css';
  import { CONVOCATORIAS_DATA } from './convocatorias';

  let selectedFilter = $state('Todas');

  const filterOptions = ['Todas', 'Docencia', 'Investigación', 'Movilidad Internacional', 'Extensión'];

  let filteredList = $derived(
    selectedFilter === 'Todas'
      ? CONVOCATORIAS_DATA
      : CONVOCATORIAS_DATA.filter(item => item.type === selectedFilter)
  );
</script>

<svelte:head>
  <title>Convocatorias y Oportunidades Docentes | Universidad de Antioquia</title>
</svelte:head>

<div class="convocatorias-container">
  <header class="convocatorias-header">
    <h1 class="convocatorias-title">Convocatorias, Investigación y Docencia</h1>
    <p class="convocatorias-sub">
      Espacio oficial para docentes, investigadores y estudiantes de posgrado. Consulta concursos docentes, becas de investigación y fondos de extensión (UC05).
    </p>
  </header>

  <!-- Filtro por tipo -->
  <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
    {#each filterOptions as opt (opt)}
      <button
        type="button"
        class="px-4 py-2 rounded-full border text-sm font-semibold transition-all {selectedFilter === opt ? 'bg-emerald-800 text-white border-emerald-800' : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-700'}"
        onclick={() => selectedFilter = opt}
      >
        {opt}
      </button>
    {/each}
  </div>

  <!-- Grilla de Convocatorias -->
  <div class="convocatorias-grid">
    {#each filteredList as item (item.id)}
      <article class="convocatoria-card">
        <div>
          <div class="convocatoria-tags">
            <span class="tag-type">{item.type}</span>
            <span class="tag-status {item.status === 'Vigente' ? 'status-vigente' : 'status-proxima'}">
              {item.status}
            </span>
          </div>

          <h2 class="convocatoria-name">{item.title}</h2>
          <p class="convocatoria-summary">{item.summary}</p>

          <div class="convocatoria-details">
            <div class="flex justify-between mb-1">
              <span class="text-gray-500">Dirigido a:</span>
              <span class="font-bold text-gray-800">{item.target}</span>
            </div>
            <div class="flex justify-between mb-1">
              <span class="text-gray-500">Cierre de postulaciones:</span>
              <span class="font-bold text-emerald-800">{item.closingDate}</span>
            </div>
            {#if item.remuneration}
              <div class="flex justify-between mt-2 pt-2 border-t border-gray-200">
                <span class="text-gray-500">Modalidad / Apoyo:</span>
                <span class="font-semibold text-gray-700 text-right text-xs max-w-50">{item.remuneration}</span>
              </div>
            {/if}
          </div>
        </div>

        <button 
          type="button" 
          class="convocatoria-btn"
          onclick={() => alert(`Consultando términos de referencia para: ${item.title}`)}
        >
          Consultar Términos de Referencia →
        </button>
      </article>
    {/each}
  </div>
</div>
