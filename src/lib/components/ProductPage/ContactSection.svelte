<script lang="ts">
	import Button from '../button/button.svelte';
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

<section
	class="w-screen pt-20 opacity-0 backdrop-blur-md transition-all duration-1000 ease-out lg:pt-40 lg:pb-30"
	bind:this={sectionRef}
	class:opacity-100={visible}
>
	<div class="mx-auto max-w-7xl px-6">
		<div class="flexcol flex-col items-center justify-between gap-12 lg:flex-row">
			<div class="flex w-full flex-col justify-between gap-4 pb-30 lg:flex-row">
				<h2 class="text-3xl font-bold text-white lg:text-4xl">
					Vi tar gjerne en uformell prat<br />
					om mulighetene hos dere!
				</h2>
				<Button
					variant="outline"
					size="lg"
					class="pointer-events-auto z-10 w-fit rounded-md bg-white px-10 py-6 text-lg font-medium text-black hover:bg-gray-100"
					>Kontakt oss →</Button
				>
			</div>
			<div class="flex flex-col items-center gap-8 lg:flex-row lg:gap-12 lg:pl-20">
				<!-- Profile Image with circular border -->
				<div class="relative">
					<!-- Floating circles -->
					<div
						class="absolute -top-4 -left-4 h-8 w-8 animate-bounce rounded-full bg-white opacity-60"
					></div>
					<div
						class="absolute -top-2 -right-6 h-6 w-6 animate-pulse rounded-full bg-gray-200 opacity-50"
					></div>
					<div
						class="absolute -bottom-3 -left-6 h-10 w-10 animate-ping rounded-full bg-gray-300 opacity-40"
					></div>
					<div
						class="absolute -right-2 -bottom-4 h-4 w-4 animate-bounce rounded-full bg-gray-100 opacity-70 delay-75"
					></div>
					<div
						class="absolute top-1/4 -left-8 h-5 w-5 animate-pulse rounded-full bg-white opacity-50 delay-150"
					></div>
					<div
						class="absolute top-3/4 -right-8 h-7 w-7 animate-ping rounded-full bg-gray-400 opacity-60 delay-300"
					></div>

					<img
						src="/imgs/founders/vebjorn-Web.jpeg"
						alt="Vebjørn Fuhre Haugholt"
						class="relative h-65 w-65 rounded-full border-4 border-white/30 object-cover"
					/>
				</div>

				<!-- Text Content -->
				<div class="text-center lg:text-left">
					<div class="space-y-2">
						<h3 class="text-xl font-semibold text-white">Vebjørn Fuhre Haugholt</h3>
						<p class="text-gray-400">Kundeansvarlig</p>
						<p class="text-gray-400">vebjoern.haugholt@ewra.no</p>
						<p class="text-gray-400">+ 47 940 56 267</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
