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
		class="relative flex max-w-4xl flex-col justify-center gap-y-12 opacity-0 transition-all duration-1000 ease-out"
		class:opacity-100={visible}
	>
		<h2 class="mb-4 text-center text-4xl font-bold text-white">Hvem passer EWRA-Insights for?</h2>
		<p class="text-lg text-white/80">
			EWRA-Insights er utviklet for profesjonelle aktører som har behov for å håndtere, organisere
			og dele store mengder visuelle data på en sikker og effektiv måte. Løsningen passer spesielt
			godt for:
		</p>
		<p class="mt-6 text-lg text-white/80">
			Vi benytter de nyeste teknologiene for å levere en raskere og mer moderne plattform enn
			tradisjonelle, ofte trege konkurrenter. Plattformen vår forbedres kontinuerlig med spennende
			oppdateringer, slik at du alltid får den beste brukeropplevelsen. Dette gjør oss svært
			konkurransedyktige og setter oss i front som pionerer – så gode at vi knapt har reelle
			konkurrenter.
		</p>
	</div>
</section>
