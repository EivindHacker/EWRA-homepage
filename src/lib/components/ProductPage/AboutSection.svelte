<!--
	Installed from @sv/cnblocks
-->

<script lang="ts">
	import Zap from '@lucide/svelte/icons/zap';
	import Upload from '@lucide/svelte/icons/upload';
	import Search from '@lucide/svelte/icons/search';
	import Box from '@lucide/svelte/icons/box';
	import Shield from '@lucide/svelte/icons/shield';
	import Plug from '@lucide/svelte/icons/plug';
	import { onMount } from 'svelte';

	interface Props {
		isDesktopView?: boolean;
	}

	let { isDesktopView = true }: Props = $props();

	let sectionRef: HTMLElement | null = $state(null);
	let visible = $state(false);
	let scrollContainer: HTMLElement | null = $state(null);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				visible = entry.isIntersecting;
			},
			{ threshold: 0.15 }
		);
		if (sectionRef) observer.observe(sectionRef);

		// Auto-scroll animation
		if (scrollContainer) {
			let scrollAmount = 0;
			const scrollStep = 0.5;
			const scrollInterval = setInterval(() => {
				if (scrollContainer) {
					scrollAmount += scrollStep;
					scrollContainer.scrollLeft = scrollAmount;

					// Reset when reaching half way (where duplicate cards start)
					const halfWidth = scrollContainer.scrollWidth / 2;
					if (scrollAmount >= halfWidth) {
						scrollAmount = 0;
						scrollContainer.scrollLeft = 0;
					}
				}
			}, 20);

			return () => {
				observer.disconnect();
				clearInterval(scrollInterval);
			};
		}

		return () => observer.disconnect();
	});
</script>

<section
	class="flex min-h-screen w-full items-center py-16 opacity-0 backdrop-blur-md transition-all duration-1000 ease-out"
	bind:this={sectionRef}
	class:opacity-100={visible}
>
	<div class="w-full">
		<div
			class="lg:flex-ro flex w-full flex-col items-center justify-center gap-12 p-2 lg:flex-row lg:px-25"
		>
			<div class="w-full space-y-8 px-6">
				<h2 class="text-4xl font-bold text-white lg:text-5xl">
					<span class="flex flex-row items-center justify-start text-nowrap text-[#FFD166]"
						>Insights</span
					>
					<span class="block text-gray-400">samler all visuell data</span>
					<span class="block">på ett sted.</span>
				</h2>

				<div class="space-y-6">
					<p class="text-xl text-gray-300">
						EWRA-Insights er et skybasert system for visuell datahåndtering som gir deg lynrask
						tilgang til bilder, 360-foto, 3D-modeller og kart.
					</p>

					<p class="text-lg text-gray-400">
						Full kontroll over dine visuelle data med enkel deling til kollegaer og
						samarbeidspartnere. Utviklet spesielt for profesjonelle aktører innen infrastruktur,
						eiendom og offentlig sektor.
					</p>
				</div>
			</div>

			<div class="relative">
				<div
					class="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm lg:w-[500px]"
				>
					<div class="mb-4 flex items-center justify-between">
						<h3 class="text-lg font-semibold text-white">Prosjekt Dashboard</h3>
						<div class="text-sm text-gray-400">Administrer dine data</div>
					</div>

					<div class="space-y-3">
						<div class="flex items-center justify-between rounded-lg bg-gray-800/50 p-3">
							<div class="flex items-center gap-3">
								<div class="h-2 w-2 rounded-full bg-green-400"></div>
								<span class="text-sm text-white">Bilder lastet opp</span>
							</div>
							<span class="text-sm text-gray-400">1,247 filer</span>
						</div>

						<div class="flex items-center justify-between rounded-lg bg-gray-800/50 p-3">
							<div class="flex items-center gap-3">
								<div class="h-2 w-2 rounded-full bg-blue-400"></div>
								<span class="text-sm text-white">3D-modeller prosessert</span>
							</div>
							<span class="text-sm text-gray-400">89 modeller</span>
						</div>

						<div class="flex items-center justify-between rounded-lg bg-gray-800/50 p-3">
							<div class="flex items-center gap-3">
								<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
								<span class="text-sm text-white">Kart oppdatert</span>
							</div>
							<span class="text-sm text-gray-400">12 områder</span>
						</div>

						<div class="flex items-center justify-between rounded-lg bg-gray-800/50 p-3">
							<div class="flex items-center gap-3">
								<div class="h-2 w-2 rounded-full bg-purple-400"></div>
								<span class="text-sm text-white">360° turer</span>
							</div>
							<span class="text-sm text-gray-400">24 turer</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="relative z-10 mt-16 max-w-screen overflow-hidden">
			<div
				bind:this={scrollContainer}
				class="flex max-w-full gap-2 overflow-x-hidden pb-4 sm:gap-3 md:gap-4"
				style="scroll-behavior: smooth;"
			>
				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 p-3 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70 sm:min-w-[240px] sm:rounded-xl sm:p-4 md:min-w-[280px] md:p-6"
				>
					<div class="mb-2 sm:mb-3 md:mb-4">
						<div
							class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/10 sm:h-8 sm:w-8 sm:rounded-lg md:h-10 md:w-10"
						>
							<Zap class="h-3.5 w-3.5 text-blue-400 sm:h-4 sm:w-4 md:h-5 md:w-5" />
						</div>
					</div>
					<h3 class="mb-1 text-sm font-semibold text-white sm:mb-2 sm:text-base md:text-lg">
						Intuitiv og brukervennlig grensesnitt
					</h3>
					<p class="text-xs leading-relaxed text-gray-400 sm:text-sm">
						Enkelt å navigere og bruke for alle typer brukere
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10"
						>
							<Upload class="h-5 w-5 text-green-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">Rask opplasting og organisering</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Effektiv håndtering av store datamengder
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10"
						>
							<Search class="h-5 w-5 text-purple-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">Avansert søk og filtrering</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Finn raskt det du leter etter i store datasett
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10"
						>
							<Box class="h-5 w-5 text-orange-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">Interaktiv 3D-visning</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Immersiv opplevelse av 3D-modeller og kart
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
							<Shield class="h-5 w-5 text-red-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">Sikker lagring</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Trygg datalagring med avansert tilgangskontroll
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10"
						>
							<Plug class="h-5 w-5 text-cyan-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">Systemintegrasjoner</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Sømløs kobling til eksisterende systemer
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10"
						>
							<Zap class="h-5 w-5 text-blue-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">
						Intuitiv og brukervennlig grensesnitt
					</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Enkelt å navigere og bruke for alle typer brukere
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10"
						>
							<Upload class="h-5 w-5 text-green-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">Rask opplasting og organisering</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Effektiv håndtering av store datamengder
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10"
						>
							<Search class="h-5 w-5 text-purple-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">Avansert søk og filtrering</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Finn raskt det du leter etter i store datasett
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10"
						>
							<Box class="h-5 w-5 text-orange-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">Interaktiv 3D-visning</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Immersiv opplevelse av 3D-modeller og kart
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
							<Shield class="h-5 w-5 text-red-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">Sikker lagring</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Trygg datalagring med avansert tilgangskontroll
					</p>
				</div>

				<div
					class="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/70"
				>
					<div class="mb-4">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10"
						>
							<Plug class="h-5 w-5 text-cyan-400" />
						</div>
					</div>
					<h3 class="mb-2 text-lg font-semibold text-white">Systemintegrasjoner</h3>
					<p class="text-sm leading-relaxed text-gray-400">
						Sømløs kobling til eksisterende systemer
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
