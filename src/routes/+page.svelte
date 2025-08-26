<script lang="ts">
	import AboutSection from '$lib/components/ProductPage/AboutSection.svelte';
	import OurCustomersSection from '$lib/components/ProductPage/OurCustomersSection.svelte';
	import SuitableForSection from '$lib/components/ProductPage/SuitableForSection.svelte';
	import TechStack from '$lib/components/ProductPage/TechStack/TechStack.svelte';
	import ContactSection from '$lib/components/ProductPage/ContactSection.svelte';
	import HeroSection from '$lib/components/ProductPage/HeroSection.svelte';
	import FeaturesSection from '$lib/components/ProductPage/FeaturesSection.svelte';
	import Monitor from '@lucide/svelte/icons/monitor';
	import Smartphone from '@lucide/svelte/icons/smartphone';

	let isDesktopView = true;
</script>

<div class="overflow-hidden">
	<!-- Desktop/Phone View Switch -->
	<div class="fixed bottom-3 left-3 z-50 flex items-center gap-4">
		<!-- Custom Switch that looks like the image -->
		<button
			type="button"
			class="relative flex cursor-pointer items-center select-none focus:outline-none"
			aria-pressed={isDesktopView}
			aria-label="Toggle between desktop and mobile view"
			on:click={() => (isDesktopView = !isDesktopView)}
		>
			<!-- Switch Background -->
			<div
				class={`
				relative h-12 w-32 rounded-full border-2 transition-all duration-300 ease-in-out
				${isDesktopView ? 'border-gray-700 bg-[#e4b957]' : 'border-gray-700 bg-gray-800'}
			`}
			>
				<!-- Labels inside the switch -->
				<div class="absolute inset-0 flex items-center justify-between px-3">
					<span
						class={`absolute left-3 text-xs  font-bold transition-opacity duration-200 ${
							!isDesktopView ? 'text-white opacity-100' : 'hidden text-gray-400 opacity-60'
						}`}
					>
						MOBILE
					</span>
					<span
						class={`absolute right-3 text-end text-xs font-bold transition-opacity duration-200  ${
							isDesktopView ? 'text-[#0A1B4D] opacity-100' : 'hidden text-gray-400 opacity-60'
						}`}
					>
						DESKTOP
					</span>
				</div>

				<!-- Switch Circle with Icon -->
				<div
					class={`
					absolute top-0.5 flex h-10 w-10 items-center justify-center rounded-full
					shadow-lg transition-all duration-300 ease-in-out
					${
						isDesktopView
							? 'left-0.5 border border-[#bd9d55] bg-[#FFD166]'
							: 'left-20.5 border border-gray-600 bg-gray-900'
					}
				`}
				>
					{#if isDesktopView}
						<Monitor class="h-4 w-4 text-[#0A1B4D]" />
					{:else}
						<Smartphone class="h-4 w-4 text-gray-300" />
					{/if}
				</div>
			</div>
		</button>
	</div>
	<!-- Main Content with conditional styling -->
	<section id="hero"><HeroSection {isDesktopView} /></section>
	<section id="about"><AboutSection {isDesktopView} /></section>
	<section id="features"><FeaturesSection {isDesktopView} /></section>
	<section id="tech"><TechStack {isDesktopView} /></section>
	<!-- <section id="customers"><OurCustomersSection /></section> -->
	<section id="contact"><ContactSection /></section>
</div>
