<script lang="ts">
	import './admisiones.css';
	import 'iconify-icon';
	import { ADMISSION_STEPS, OFFICIAL_DATES } from './admisiones';
</script>

<svelte:head>
	<title>Admisiones e Inscripciones Oficiales | Universidad de Antioquia</title>
</svelte:head>

<div class="admisiones-container">
	<header class="admisiones-header">
		<h1 class="admisiones-title">Proceso de Admisión a Pregrado y Posgrado</h1>
		<p class="admisiones-sub">
			Guía clara y oficial paso a paso para aspirantes a la Universidad de Antioquia. Información
			verificada bajo el calendario académico institucional.
		</p>
	</header>

	<!-- Pasos para Aspirantes (HU_UDEA 01: acceso a la información importante en máximo 3 clics) -->
	<section class="steps-container" aria-label="Pasos de admisión">
		{#each ADMISSION_STEPS as step}
			<article class="step-card">
				<div class="step-number" aria-hidden="true">{step.step}</div>
				<div class="step-content">
					<div class="mb-1 flex items-center">
						<h2 class="step-title">{step.title}</h2>
						{#if step.badge}
							<span class="step-badge">{step.badge}</span>
						{/if}
					</div>
					<div class="step-date">
						<iconify-icon icon="fontisto:date"></iconify-icon> Fechas: {step.dateRange}
					</div>
					<p class="step-desc">{step.description}</p>
					<a href={step.actionUrl} class="step-action-btn">
						{step.actionText} →
					</a>
				</div>
			</article>
		{/each}
	</section>

	<!-- Calendario Oficial Único (RN-01, RN-02) -->
	<section class="calendar-section" aria-label="Fechas clave del calendario">
		<div class="calendar-header">
			<h2 class="calendar-title">Calendario Oficial de Convocatorias</h2>
			<p class="mt-1 text-sm text-gray-500">
				Fuente oficial única para evitar inconsistencias en fechas de exámenes y matrículas.
			</p>
		</div>

		<div class="overflow-x-auto">
			<table class="calendar-table">
				<thead>
					<tr>
						<th>Proceso / Convocatoria</th>
						<th>Fecha Límite</th>
						<th>Estado</th>
						<th>Observaciones</th>
					</tr>
				</thead>
				<tbody>
					{#each OFFICIAL_DATES as item}
						<tr>
							<td class="font-bold text-gray-900">{item.event}</td>
							<td class="font-semibold text-emerald-800">{item.date}</td>
							<td>
								<span
									class="status-badge {item.status === 'Abierta'
										? 'status-abierta'
										: 'status-proximamente'}"
								>
									{item.status}
								</span>
							</td>
							<td class="text-sm text-gray-500">{item.notes}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</div>
