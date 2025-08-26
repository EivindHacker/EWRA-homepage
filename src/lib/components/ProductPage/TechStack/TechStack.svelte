<script lang="ts">
	// Scroll below for the component code
	import IntegrationCardv5 from './IntegrationCardv5.svelte';
	import * as Drawer from '$lib/components/ui/drawer';
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
	let drawerOpen = $state(false);
</script>

<section
	class="opacity-0 backdrop-blur-md transition-all duration-1000 ease-out"
	bind:this={sectionRef}
	class:opacity-100={visible}
>
	<div class="flex h-screen items-center">
		<div class="mx-auto max-w-5xl px-6">
			<div
				class="group relative mx-auto flex aspect-16/10 max-w-[22rem] items-center justify-between sm:max-w-sm"
			>
				<div
					role="presentation"
					class="absolute inset-0 z-1 aspect-square animate-spin items-center justify-center rounded-full border-t border-white/10 bg-gradient-to-b from-blue-400/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
				></div>
				<div
					role="presentation"
					class="absolute inset-16 z-1 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t border-white/10 bg-gradient-to-b from-cyan-400/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
				></div>
				<div
					class="absolute inset-0 z-1 flex aspect-square items-center justify-center rounded-full border-t border-white/20 bg-gradient-to-b from-white/15 to-transparent to-25%"
				>
					<IntegrationCardv5
						class="absolute top-1/4 left-0 -translate-x-1/6 -translate-y-1/4  border-white/25 bg-white/10 shadow-xl backdrop-blur-sm"
					>
						<img src="/imgs/logos/react.svg" alt="React Logo" />
					</IntegrationCardv5>
					<IntegrationCardv5
						class="absolute top-0 -translate-y-1/2  border-white/25 bg-white/10 shadow-xl backdrop-blur-sm"
					>
						<img src="/imgs/logos/azure.svg" alt="Azure Logo" />
					</IntegrationCardv5>
					<IntegrationCardv5
						class="absolute top-1/4 right-0 translate-x-1/6 -translate-y-1/4  border-white/25 bg-white/10 shadow-xl backdrop-blur-sm"
					>
						<img src="/imgs/logos/expressjs.svg" alt="Express-js Logo" />
					</IntegrationCardv5>
				</div>
				<div
					class="absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t border-white/20 bg-gradient-to-b from-white/15 to-transparent to-25%"
				>
					<IntegrationCardv5
						class="absolute top-0 -translate-y-1/2  border-white/25 bg-white/10 shadow-xl backdrop-blur-sm"
					>
						<img src="/imgs/logos/typescript.svg" alt="TypeScript Logo" />
					</IntegrationCardv5>
					<IntegrationCardv5
						class="absolute top-1/4 left-0 -translate-x-1/4 -translate-y-1/4  border-white/25 bg-white/10 shadow-xl backdrop-blur-sm"
					>
						<img src="/imgs/logos/tailwind-css.svg" alt="Tailwind Logo" />
					</IntegrationCardv5>
					<IntegrationCardv5
						class="absolute top-1/4 right-0 translate-x-1/4 -translate-y-1/4  border-white/25 bg-white/10 shadow-xl backdrop-blur-sm "
					>
						<img src="/imgs/logos/mapbox.svg" alt="Mapbox Logo" />
					</IntegrationCardv5>
				</div>
				<div class="absolute inset-x-0 bottom-0 mx-auto my-2 flex w-fit justify-center gap-2">
					<div class="relative z-1 rounded-full border border-white/20 p-1">
						<IntegrationCardv5
							class="size-16 border-white/25 bg-white/10 shadow-xl backdrop-blur-sm"
							isCenter={true}
						>
							<img src="/imgs/logos/EWRA-logo-sm.svg" alt="Logo" class="h-13" />
						</IntegrationCardv5>
					</div>
				</div>
			</div>
			<div class="relative z-1 mx-auto mt-12 max-w-lg space-y-6 text-center">
				<h2 class="text-3xl font-semibold text-balance text-white md:text-4xl">
					Integrate with your favorite tools
				</h2>
				<p class="text-gray-300">
					Connect seamlessly with popular platforms and services to enhance your workflow.
				</p>
				<Drawer.Root bind:open={drawerOpen}>
					<Drawer.Trigger
						class="inline-flex h-10 items-center justify-center gap-2 rounded-md border-white/25 bg-white/10 px-8 text-sm font-medium whitespace-nowrap text-white shadow-xl backdrop-blur-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						Api documentation
					</Drawer.Trigger>
					<Drawer.Portal>
						<Drawer.Overlay class="fixed inset-0" />
						<Drawer.Content
							class="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-white/10  from-black/90 to-blue-950/40  shadow-2xl backdrop-blur-lg"
						>
							<div class="h-[500px]"></div>
						</Drawer.Content>
					</Drawer.Portal>
				</Drawer.Root>
			</div>
		</div>
	</div>
</section>
