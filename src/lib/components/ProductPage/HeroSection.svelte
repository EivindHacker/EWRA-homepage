<!--
	Installed from @sv/cnblocks
-->

<script lang="ts">
	import { Button } from '../button';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import CirclePlay from '@lucide/svelte/icons/circle-play';
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

	interface Props {
		isDesktopView?: boolean;
	}

	let { isDesktopView = true }: Props = $props();
</script>

<main
	class="h-screen w-screen pt-26 opacity-0 backdrop-blur-md transition-all duration-1000 ease-out lg:pt-40"
	bind:this={sectionRef}
	class:opacity-100={visible}
>
	<section class="bg-linear-to-b">
		<div class="relative">
			<div
				class="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 lg:flex-row"
			>
				<div class="md:w-1/2">
					<div>
						<h1 class="mb-2 max-w-md text-3xl font-medium text-balance md:text-5xl">
							<span class="flex flex-row items-center justify-start text-nowrap">
								<img src="/imgs/logos/EWRA-logo.svg" alt="Logo" class="h-10 md:h-13" />
								<span class="-mt-1.5 leading-none">&nbsp;-&nbsp;Insights</span>
							</span>
						</h1>
						<p class="flex-nowrap text-xl md:text-3xl">Ett system. All visuell innsikt.</p>
						<p
							class="my-4 max-w-xs text-base text-balance text-muted-foreground md:my-5 md:max-w-2xl md:text-xl"
						>
							Ewra -Insights gir deg et lynraskt og intuitivt verktøy for å lagre, organisere og
							navigere i bilder, 360-foto, 3D-modeller og kart.
						</p>

						<div class="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row">
							<Button href="#" variant="primary" size="lg" class="w-full md:w-auto">
								<span class="text-nowrap">Get Demo</span>
								<ChevronRight class="opacity-50" />
							</Button>
							<Button href="#" size="lg" variant="default" class="w-full pl-5 md:w-auto">
								<CirclePlay class="fill-white/20 stroke-white" />
								<span>Watch demo video</span>
							</Button>
						</div>
					</div>

					<div class="mt-5">
						<p class="text-muted-foreground">Brukes av:</p>
						<div class="mt-2 grid max-w-sm grid-cols-3 gap-6">
							<div class="flex">
								<img
									class="h-12 brightness-[1000]"
									src="/imgs/logos/nye-veier-logo.png"
									alt="Nye Veier Logo"
									height="16"
									width="auto"
								/>
							</div>
						</div>
					</div>
				</div>
				{#key isDesktopView}
					<img
						src={isDesktopView ? '/imgs/mac-mockup.png' : '/imgs/mob-mockup.png'}
						alt="app screen"
						width="2880"
						height="1842"
						class="size-full object-cover object-top-left transition-all duration-700 ease-in-out lg:pr-40"
						style="opacity: 1;"
					/>
				{/key}
			</div>
		</div>
	</section>
</main>
