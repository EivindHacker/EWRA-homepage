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

<section class="pb-15">
	<div
		bind:this={sectionRef}
		class="relative z-10 mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-12 opacity-0 shadow-lg backdrop-blur-md transition-all duration-1000 ease-out"
		class:opacity-100={visible}
	>
		<h2 class="mb-6 text-3xl font-bold text-white">Våre kunder</h2>
		<p class="mb-6 text-lg text-white/80">
			Vår kunde er Nye Veier, som setter pris på brukervennlighet, sikkerhet og fleksibilitet i
			løsningen.
		</p>

		<img
			src="/imgs/nye-veier-logo.png"
			alt="Nye Veier Logo"
			class="mx-auto mt-4 h-20 brightness-[10] grayscale"
		/>
	</div>
</section>
