<script>
	import { fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mount = $state(false);

	onMount(() => {
		mount = true;
	});
</script>

{#key mount}
	<section class="flex h-screen flex-col items-center">
		<div class="relative mx-auto mt-12 mb-4 flex items-center" in:fly={{ duration: 1000, y: -100 }}>
			<div class="mb-4 flex items-center justify-center gap-3">
				<img src="/imgs/ewra-logo.png" alt="EWRA Logo" class="h-20 w-auto object-contain" />
			</div>

			<h1
				class="-mt-2 mb-2 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-5xl leading-normal font-extrabold text-transparent"
			>
				<span class="text-5xl text-white">-</span> Insights
			</h1>
		</div>

		<div class="max-w-6xl">
			<div class="mt-20 flex justify-center">
				<div class="flex translate-x-28 flex-col gap-y-4" in:fly={{ duration: 1000, x: -100 }}>
					<h2 class="text-4xl">Ett system. All visuell innsikt.</h2>
					<p class=" min-w-[20vw] text-xl leading-relaxed text-white/60">
						Ewra -Insights gir deg et lynraskt og intuitivt verktøy for å lagre, organisere og
						navigere i bilder, 360-foto, 3D-modeller og kart.
					</p>
				</div>
				<img
					in:fly={{ duration: 1000, x: 100 }}
					src="/imgs/mac-mockup.png"
					alt="MacBook Air Mockup"
					class="mb-8 w-[50vw] -translate-y-20 scale-125 rounded-lg shadow-lg"
				/>
			</div>
		</div>
	</section>
{/key}
