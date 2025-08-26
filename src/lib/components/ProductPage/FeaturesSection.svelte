<!--
	Installed from @sv/cnblocks
-->

<script lang="ts">
	import { Card, CardContent, CardHeader } from '../card';
	import { Switch } from '../ui/switch';
	import Settings2 from '@lucide/svelte/icons/settings-2';
	import User from '@lucide/svelte/icons/user';
	import Bot from '@lucide/svelte/icons/bot';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowDown from '@lucide/svelte/icons/arrow-down';
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
	let editMode = $state(false);
	let isTransitioning = $state(false);

	// Handle smooth transition when editMode changes
	$effect(() => {
		isTransitioning = true;
		const timer = setTimeout(() => {
			isTransitioning = false;
		}, 700); // Match the CSS transition duration

		return () => clearTimeout(timer);
	});
</script>

<section
	class="py-16 opacity-0 backdrop-blur-md transition-all duration-1000 ease-out md:py-32"
	bind:this={sectionRef}
	class:opacity-100={visible}
>
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-semibold text-balance text-white lg:text-5xl">
				Built to cover your needs
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-400">
				Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.
			</p>
		</div>

		<div class="relative flex flex-col items-center gap-8 lg:flex-row lg:gap-6">
			<div class="group relative w-full max-w-md flex-1 lg:max-w-none">
				<Card
					class="h-full overflow-hidden border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-gray-700"
				>
					<CardHeader class="p-6 pb-4">
						<div
							class="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-sm"
						>
							<img
								src={isDesktopView
									? editMode
										? '/imgs/image_1_admin.jpg'
										: '/imgs/image_1_client.jpg'
									: editMode
										? '/imgs/image_1_mobil_admin.jpg'
										: '/imgs/image_1_mobil_client.jpg'}
								alt="Map interface"
								class="h-full rounded-sm shadow-lg transition-all duration-700 ease-in-out"
								class:opacity-75={isTransitioning}
								style="filter: {isTransitioning ? 'blur(1px)' : 'blur(0px)'};"
							/>
						</div>

						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
								<Settings2 class="h-5 w-5 text-blue-400" />
							</div>
							<h3 class="text-xl font-semibold text-white">Customizable</h3>
						</div>
					</CardHeader>
					<CardContent class="px-6 pb-6">
						<p class="leading-relaxed text-gray-400">
							Extensive customization options, allowing you to tailor every aspect to meet your
							specific needs.
						</p>
					</CardContent>
				</Card>
			</div>

			<!-- Arrow down for mobile/tablet, arrow right for desktop -->
			<div class="flex items-center justify-center lg:hidden">
				<ArrowDown class="h-6 w-6 text-gray-300" />
			</div>
			<div class="hidden items-center justify-center lg:flex">
				<ArrowRight class="h-6 w-6 text-gray-300" />
			</div>

			<div class="group relative w-full max-w-md flex-1 lg:max-w-none">
				<Card
					class="h-full overflow-hidden border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-gray-700"
				>
					<CardHeader class="p-6 pb-4">
						<div
							class="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-sm"
						>
							<img
								src={isDesktopView
									? editMode
										? '/imgs/image_2_admin.jpg'
										: '/imgs/image_2_client.jpg'
									: editMode
										? '/imgs/image_2_mobil_admin.jpg'
										: '/imgs/image_2_mobil_client.jpg'}
								alt="Map interface"
								class="h-full rounded-sm shadow-lg transition-all duration-700 ease-in-out"
								class:opacity-75={isTransitioning}
								style="filter: {isTransitioning ? 'blur(1px)' : 'blur(0px)'};"
							/>
						</div>
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
								<User class="h-5 w-5 text-green-400" />
							</div>
							<h3 class="text-xl font-semibold text-white">You have full control</h3>
						</div>
					</CardHeader>
					<CardContent class="px-6 pb-6">
						<p class="leading-relaxed text-gray-400">
							From design elements to functionality, you have complete control to create a unique
							and personalized experience.
						</p>
					</CardContent>
				</Card>
			</div>

			<!-- Arrow down for mobile/tablet, arrow right for desktop -->
			<div class="flex items-center justify-center lg:hidden">
				<ArrowDown class="h-6 w-6 text-gray-300" />
			</div>
			<div class="hidden items-center justify-center lg:flex">
				<ArrowRight class="h-6 w-6 text-gray-300" />
			</div>

			<div class="group relative w-full max-w-md flex-1 lg:max-w-none">
				<Card
					class="h-full overflow-hidden border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-gray-700"
				>
					<CardHeader class="p-6 pb-4">
						<div
							class="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-sm"
						>
							<img
								src={isDesktopView
									? editMode
										? '/imgs/image_3_admin.jpg'
										: '/imgs/image_3_client.jpg'
									: editMode
										? '/imgs/image_3_mobil_admin.jpg'
										: '/imgs/image_3_mobil_client.jpg'}
								alt="Map interface"
								class="h-full rounded-sm shadow-lg transition-all duration-700 ease-in-out"
								class:opacity-75={isTransitioning}
								style="filter: {isTransitioning ? 'blur(1px)' : 'blur(0px)'};"
							/>
						</div>
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
								<Bot class="h-5 w-5 text-purple-400" />
							</div>
							<h3 class="text-xl font-semibold text-white">Powered by AI</h3>
						</div>
					</CardHeader>
					<CardContent class="px-6 pb-6">
						<p class="leading-relaxed text-gray-400">
							Elements to functionality, you have complete control to create a unique experience.
						</p>
					</CardContent>
				</Card>
			</div>
			<!-- Edit Mode Switch -->
			<div class="absolute right-6 -bottom-13 flex items-center justify-end gap-4 pt-10">
				<span class="text-center text-base text-gray-200">Edit Mode</span>
				<div class="flex scale-125 items-center">
					<Switch bind:checked={editMode} />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Card Decorator Code  -->
<!--
 <script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

<div
  class="relative mx-auto size-36 duration-500 ease-in transition-all [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
>
  <div
    class="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
  ></div>
  <div
    class="bg-radial to-background absolute inset-0 from-transparent to-75%"
  ></div>
  <div
    class="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t"
  >
    {@render children()}
  </div>
</div>
   -->
