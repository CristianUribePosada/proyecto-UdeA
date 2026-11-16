<script lang="ts">
	import './tramites.css';
	import { ONLINE_SERVICES } from './tramites';

	let selectedCategory = $state<string>('Todos');

	const categories = ['Todos', 'Estudiantes', 'Egresados', 'Docentes', 'General'];

	let filteredServices = $derived(
		selectedCategory === 'Todos'
			? ONLINE_SERVICES
			: ONLINE_SERVICES.filter((s) => s.category === selectedCategory)
	);
</script>

<svelte:head>
	<title>Trámites y Servicios en Línea | Universidad de Antioquia</title>
</svelte:head>

<div class="tramites-container">
	<header class="tramites-header">
		<h1 class="tramites-title">Trámites y Servicios Institucionales</h1>
		<p class="tramites-sub">
			Ventanilla oficial unificada. Gestiona certificados, actas de grado, plataformas de
			aprendizaje y solicitudes estudiantiles en un solo lugar y en menos de 3 clics.
		</p>
	</header>

	<!-- Filtro por perfil (HU_UDEA 01 - Criterio 5) -->
	<div class="tabs-container" role="tablist" aria-label="Filtrar por destinatario">
		{#each categories as cat (cat)}
			<button
				type="button"
				class="tab-btn"
				class:active={selectedCategory === cat}
				onclick={() => (selectedCategory = cat)}
			>
				{cat}
			</button>
		{/each}
	</div>

	<!-- Grilla de Servicios -->
	<div class="services-grid">
		{#each filteredServices as service (service.id)}
			<article class="service-card">
				<div>
					<div class="flex items-center gap-2">
						<span class="service-target">{service.category}</span>
						{#if service.badge}
							<span class="service-badge">{service.badge}</span>
						{/if}
					</div>

					<h2 class="service-title">{service.title}</h2>
					<p class="service-desc">{service.description}</p>

					<!-- Componente "Ver más" desplegable nativo sin salir de página -->
					<details class="service-details">
						<summary>Ver requisitos y tiempo estimado ({service.estimatedTime})</summary>
						<ul>
							{#each service.requirements as req, idx (idx)}
								<li>{req}</li>
							{/each}
						</ul>
					</details>
				</div>

				<button
					type="button"
					class="service-btn"
					onclick={() => alert(`Iniciando solicitud para: ${service.title}`)}
				>
					{service.actionText} →
				</button>
			</article>
		{/each}
	</div>
</div>

<!-- Proyecto creado por: Cristian Uribe Posada-->
