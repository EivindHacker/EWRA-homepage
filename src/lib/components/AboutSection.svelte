<script lang="ts">
	import { onMount } from 'svelte';
	let sectionRef: HTMLElement | null = $state(null);
	let visible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				visible = entry.isIntersecting;
			},
			{ threshold: 0.15 }
		);
		if (sectionRef) observer.observe(sectionRef);
		return () => observer.disconnect();
	});
</script>

<section class="flex min-h-screen flex-col items-center justify-center">
	<div
		bind:this={sectionRef}
		class="relative z-10 mx-auto mt-20 max-w-4xl translate-y-8 rounded-xl border border-white/10 bg-white/5 px-4 py-12 opacity-0 shadow-lg backdrop-blur-md transition-all duration-1000 ease-out"
		class:opacity-100={visible}
	>
		<h2 class="mb-4 text-3xl font-bold text-white">Om EWRA-Insights</h2>
		<p class="mb-4 text-lg text-white/80">
			EWRA-Insights er et moderne, skybasert system for visuell datahåndtering. Plattformen gir deg
			lynrask tilgang til bilder, 360-foto, 3D-modeller og kart – alt samlet på ett sted,
			tilgjengelig fra alle enheter.
		</p>
		<ul class="mb-4 list-disc space-y-2 pl-6 text-white/70">
			<li>Intuitiv og brukervennlig grensesnitt</li>
			<li>Rask opplasting og organisering av store datamengder</li>
			<li>Støtte for avansert søk og filtrering</li>
			<li>Interaktiv visning av 3D-modeller og kart</li>
			<li>Sikker lagring og tilgangskontroll</li>
			<li>Integrasjoner med eksterne systemer</li>
		</ul>
		<p class="text-white/60">
			Med EWRA-Insights får du full kontroll over dine visuelle data, og kan enkelte dele innsikt
			med kollegaer og samarbeidspartnere. Plattformen er utviklet for profesjonelle aktører innen
			infrastruktur, eiendom, og offentlig sektor.
		</p>
	</div>
</section>
