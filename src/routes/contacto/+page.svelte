<script lang="ts">
  import './contacto.css';
  import 'iconify-icon';
  import { OFFICIAL_CHANNELS, CAMPUS_LOCATIONS } from './contacto';

  let formName = $state('');
  let formEmail = $state('');
  let formCategory = $state('Petición o Consulta');
  let formMessage = $state('');
  let submitted = $state(false);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    submitted = true;
  }
</script>

<svelte:head>
  <title>Directorio Oficial y Canales de Contacto | Universidad de Antioquia</title>
</svelte:head>

<div class="contacto-container">
  <header class="contacto-header">
    <h1 class="contacto-title">Directorio Oficial y Canales de Atención</h1>
    <p class="contacto-sub">
      Canal unificado sin información duplicada ni teléfonos desactualizados (RN-01). Comunícate directamente con la dependencia que necesitas.
    </p>
  </header>

  <!-- Canales Principales -->
  <section class="channels-grid" aria-label="Canales directos de atención">
    {#each OFFICIAL_CHANNELS as ch}
      <article class="channel-card">
        {#if ch.badge}
          <span class="channel-badge">{ch.badge}</span>
        {/if}
        <h2 class="channel-name">{ch.name}</h2>
        <div class="channel-detail">{ch.detail}</div>
        <p class="channel-schedule"><iconify-icon icon="akar-icons:clock"></iconify-icon> {ch.schedule}</p>
      </article>
    {/each}
  </section>

  <!-- Formulario PQRSDF y Sedes -->
  <div class="layout-split">
    <!-- Radicación Oficial PQRSDF -->
    <section class="form-card" id="pqrs">
      <h2 class="card-heading">Radicación de Solicitudes y PQRSDF</h2>
      <p class="text-sm text-gray-500 mb-4">
        Canal formal para peticiones, quejas, reclamos, sugerencias y felicitaciones con número de seguimiento oficial.
      </p>

      {#if submitted}
        <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800">
          <h3 class="font-bold text-base mb-1">¡Solicitud Radicada Exitosamente!</h3>
          <p class="text-sm">Radicado asignado: <strong>UDEA-2026-{(Math.random() * 100000).toFixed(0)}</strong></p>
          <p class="text-xs mt-2 text-emerald-700">Se ha enviado confirmación a {formEmail}. Recibirás respuesta formal en el plazo estipulado por ley.</p>
          <button 
            type="button" 
            class="mt-3 text-xs font-bold underline"
            onclick={() => { submitted = false; formName = ''; formEmail = ''; formMessage = ''; }}
          >
            Radicar otra solicitud
          </button>
        </div>
      {:else}
        <form onsubmit={handleSubmit}>
          <div class="form-group">
            <label for="form-name" class="form-label">Nombre completo o entidad solicitante:</label>
            <input id="form-name" class="form-input" required bind:value={formName} placeholder="ej. María Pérez" />
          </div>

          <div class="form-group">
            <label for="form-email" class="form-label">Correo electrónico de contacto:</label>
            <input id="form-email" type="email" class="form-input" required bind:value={formEmail} placeholder="correo@ejemplo.com" />
          </div>

          <div class="form-group">
            <label for="form-cat" class="form-label">Tipo de solicitud:</label>
            <select id="form-cat" class="form-select" bind:value={formCategory}>
              <option>Petición o Consulta de Información</option>
              <option>Solicitud Académica / Admisiones</option>
              <option>Reclamo por Servicio</option>
              <option>Felicitación o Reconocimiento</option>
            </select>
          </div>

          <div class="form-group">
            <label for="form-msg" class="form-label">Descripción clara de su solicitud:</label>
            <textarea id="form-msg" class="form-textarea" rows="4" required bind:value={formMessage} placeholder="Describe los detalles de tu consulta..."></textarea>
          </div>

          <button type="submit" class="form-submit-btn">
            Enviar Solicitud con Radicado Oficial →
          </button>
        </form>
      {/if}
    </section>

    <!-- Sedes y Seccionales -->
    <section class="locations-card" id="sedes">
      <h2 class="card-heading">Sedes Principales y Seccionales</h2>
      <p class="text-sm text-gray-500 mb-4">Directorio de ubicación y teléfonos de contacto en Medellín y subregiones.</p>

      <div>
        {#each CAMPUS_LOCATIONS as loc}
          <div class="location-item">
            <span class="location-city">{loc.city}</span>
            <div class="location-name">{loc.name}</div>
            <div class="location-address"> <iconify-icon icon="andrsrxn:map-pin"></iconify-icon> {loc.address}</div>
            <div class="text-xs text-emerald-800 font-semibold mt-1">
              <iconify-icon icon="andrsrxn:phone"></iconify-icon> {loc.phone} • <iconify-icon icon="mage:email"></iconify-icon> {loc.email}
            </div>
          </div>
        {/each}
      </div>
    </section>
  </div>
</div>
