<script lang="ts">
  import './inicio.css';
  import {
    PRIORITY_ACTIONS,
    POPULAR_SEARCH_TERMS,
    LATEST_NEWS,
    performClientSearch
  } from './inicio';

  let searchQuery = $state('');

  let searchResults = $derived(performClientSearch(searchQuery));

  function setQuery(term: string) {
    searchQuery = term;
  }
</script>

<!-- Banner Rediseñado: Sin sobrecarga visual, con foco en el usuario -->
<section class="hero-banner">
  <div class="hero-container">
    <div class="hero-badge">
      <span>Portal Institucional Renovado</span>
    </div>

    <h2 class="hero-title">Bienvenido a la Universidad de Antioquia</h2>
    <p class="hero-subtitle">
      Encuentra información académica, realiza trámites en línea, consulta convocatorias oficiales y descubre programas universitarios sin menús complejos ni etiquetas ambiguas.
    </p>

    <!-- Buscador Integrado Inteligente y Accesible (RF-08, UC02, UC08) -->
    <div class="search-box-wrapper">
      <div class="search-input-group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          class="search-input"
          placeholder="¿Qué deseas consultar hoy? (ej. Medicina, Admisiones, Certificados, Calendario...)"
          bind:value={searchQuery}
          aria-label="Buscar en el portal de la UdeA"
        />
        {#if searchQuery}
          <button
            type="button"
            class="text-gray-400 hover:text-gray-600 font-bold px-2 py-1"
            onclick={() => (searchQuery = '')}
            aria-label="Limpiar búsqueda"
          >
            ✕
          </button>
        {/if}
      </div>

      <!-- Resultados desplegables en tiempo real -->
      {#if searchQuery.trim().length > 0}
        <div class="search-results-dropdown" role="region" aria-label="Resultados de búsqueda">
          {#if searchResults.length > 0}
            <div class="p-2 bg-gray-50 border-b text-xs font-semibold text-gray-500 uppercase">
              Resultados encontrados ({searchResults.length}):
            </div>
            {#each searchResults as result (result.id)}
              <a href={result.url} class="search-result-item">
                <div>
                  <span class="search-result-title">{result.title}</span>
                  <span class="search-result-category">{result.category}</span>
                </div>
                <div class="search-result-desc">{result.description}</div>
              </a>
            {/each}
          {:else}
            <div class="p-4 text-center text-sm text-gray-500">
              No encontramos coincidencias exactas para "{searchQuery}". Revisa la ortografía o intenta términos como <strong>"Admisiones"</strong>, <strong>"Pregrados"</strong> o <strong>"Certificados"</strong>.
            </div>
          {/if}
        </div>
      {/if}
    </div>

    <!-- Términos sugeridos de acceso rápido -->
    <div class="popular-chips">
      <span class="text-white/80 font-medium">Búsquedas frecuentes:</span>
      {#each POPULAR_SEARCH_TERMS as term (term)}
        <button
          type="button"
          class="popular-chip-btn"
          onclick={() => setQuery(term)}
        >
          {term}
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- 3 Accesos Directos Cruciales (HU_UDEA 01 - Criterio 1: Admisiones, Programas y Contacto sin abrir menús) -->
<section class="priority-section" aria-label="Accesos prioritarios">
  <div class="priority-grid">
    {#each PRIORITY_ACTIONS as action (action.id)}
      <article class="priority-card">
        <div>
          {#if action.badge}
            <span class="priority-card-badge">{action.badge}</span>
          {/if}
          <h3 class="priority-card-title">{action.title}</h3>
          <p class="priority-card-desc">{action.description}</p>
        </div>
        <a href={action.href} class="priority-card-btn">
          Ingresar a {action.title} →
        </a>
      </article>
    {/each}
  </div>
</section>

<!-- Sección Informativa Oficial Centralizada (RN-01, RN-04) -->
<section class="news-section">
  <div class="section-header">
    <div>
      <h2 class="section-title">Actualidad Institucional Verificada</h2>
      <p class="text-sm text-gray-500 mt-1">Canal oficial sin publicaciones desactualizadas ni enlaces duplicados.</p>
    </div>
    <a href="/convocatorias" class="text-sm font-bold text-emerald-800 hover:underline">
      Ver todas las novedades →
    </a>
  </div>

  <div class="news-grid">
    {#each LATEST_NEWS as news (news.id)}
      <article class="news-card">
        <div>
          <div class="news-meta">
            <span class="news-badge">{news.category}</span>
            <span class="news-date">{news.date}</span>
          </div>
          <h3 class="news-heading">{news.title}</h3>
          <p class="news-excerpt">{news.excerpt}</p>
        </div>
        <a href={news.href} class="news-link">
          Leer comunicado oficial <span>→</span>
        </a>
      </article>
    {/each}
  </div>
</section>

<!-- De interés (video institucional + artículo) -->
<section class="interest-section">
  <h2 class="interest-title">De interés</h2>
  <div class="interest-grid">
    <!-- Columna izquierda: Video -->
    <div class="interest-video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/O-dNozuWWgg"
        title="La Canasta de la U, mercado agroecológico UdeA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <!-- Columna derecha: Texto -->
    <div class="interest-text">
      <h3 class="interest-article-title">
        La Canasta de la U, mercado agroecológico UdeA, celebra 10 años de trabajo por la sostenibilidad
      </h3>
      <p class="interest-paragraph">
        La Canasta de la U, mercado agroecológico de la Universidad de Antioquia, celebró diez años el pasado 23 de octubre, durante el Festival La Tierra Celebra. Los viernes cada quince días, este espacio reúne en Ciudad Universitaria, campus Medellín, a una red de 23 productores locales que ofrecen frutas, verduras, quesos, café, panes, especias, jabones y tejidos, entre otros productos.
      </p>
      <p class="interest-paragraph">
        Además de conectar a la comunidad universitaria con productores de distintas regiones de Antioquia, las canasterías promueven el intercambio de saberes, la construcción de vínculos y el reconocimiento de otras formas de producir y consumir. Para sus participantes, La Canasta de la U es también un espacio de encuentro y resistencia colectiva, que fortalece las economías locales y abre oportunidades para aprender más allá de las aulas.
      </p>
      <p class="interest-paragraph">
        La Canasta de la U opera bajo la coordinación del Grupo de Investigación Aliados con el Planeta, adscrito a la Corporación Académica Ambiental, y cuenta con el apoyo de la Dirección de Bienestar Universitario, la Vicerrectoría de Extensión, la Escuela de Nutrición y Dietética y Cooprudea.
      </p>
    </div>
  </div>
</section>
