<!--
	Installed from @sv/cnblocks
-->

<script lang="ts">
	import { cn } from '../../utils';
	import Menu from '@lucide/svelte/icons/menu';
	import Button from './button/button.svelte';
	import { scrollY } from 'svelte/reactivity/window';
	import * as Sheet from './ui/sheet/index';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	let menuItems = [
		{ name: 'Hjem', href: '#hero' },
		{ name: 'Om oss', href: '#about' },
		{ name: 'Funksjoner', href: '#features' },
		{ name: 'Teknologi', href: '#tech' },
		// { name: 'Kunder', href: '#customers' },
		{ name: 'Kontakt', href: '#contact' }
	];
	let menuState = $state(false);
	let isScrolled = $derived.by(() => {
		if (scrollY.current !== undefined && scrollY.current > 50) {
			return true;
		}
		return false;
	});
	let headerRef: HTMLElement;

	function handleMenuClick(event: MouseEvent, href: string) {
		const id = href.replace('#', '');
		const section = document.getElementById(id);
		if (section) {
			event.preventDefault();
			const headerHeight = headerRef?.offsetHeight || 0;
			const sectionTop = section.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: sectionTop - headerHeight - 8, // 8px ekstra padding
				behavior: 'smooth'
			});
			menuState = false; // Lukk mobilmeny
		}
	}

	// Smooth scroll to section with offset for fixed header
	function handleNavClick(event: MouseEvent, href: string) {
		if (href.startsWith('#')) {
			event.preventDefault();
			const el = document.querySelector(href);
			if (el) {
				const yOffset = 80; // adjust if your header is taller/shorter
				const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - yOffset;
				window.scrollTo({ top: y, behavior: 'smooth' });
			}
		}
	}
</script>

<header bind:this={headerRef} class="w-full [--color-primary:theme(colors.indigo.500)]">
	<!-- add `fixed` class below to make it fixed on top -->
	<nav
		class={cn(
			'fixed z-20 w-full transition-all duration-300',
			isScrolled && ' w-full  bg-background/20 backdrop-blur-lg'
		)}
	>
		<div class="mx-auto max-w-5xl px-6">
			<div class="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0">
				<div class="flex w-full justify-between gap-6 lg:w-auto">
					<a href="/" aria-label="home" class="flex items-center space-x-2">
						<img src="/imgs/logos/EWRA-logo-sm.svg" alt="Logo" class="h-8" />
					</a>

					<!-- Mobile menu with Sheet -->
					<Sheet.Root bind:open={menuState}>
						<Sheet.Trigger
							aria-label="Open Menu"
							class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
						>
							<Menu class="size-6" />
						</Sheet.Trigger>
						<Sheet.Content
							side="right"
							class="w-[300px] border border-white/10 bg-[#03071c9f] text-white shadow-2xl backdrop-blur-lg sm:w-[400px]"
						>
							<div class="relative grid h-full w-full gap-4 py-4">
								<nav class="space-y-3 pt-4">
									{#each menuItems as item}
										<a
											href={item.href}
											class="block rounded-md px-3 py-2 text-base font-medium text-white transition-colors hover:bg-accent hover:text-accent-foreground"
											on:click={(e) => handleMenuClick(e, item.href)}
										>
											{item.name}
										</a>
									{/each}
								</nav>
								<div class="absolute bottom-0 w-full p-2">
									<Button href="#" variant="primary" size="lg" class="w-full">
										<span>Get Demo</span>
										<ChevronRight class="opacity-50" />
									</Button>
								</div>
							</div>
						</Sheet.Content>
					</Sheet.Root>

					<div class="m-auto hidden size-fit lg:block">
						<ul class="flex gap-1">
							{#each menuItems as item, index}
								<li>
									<Button variant="ghost" size="sm">
										<a
											href={item.href}
											class="text-base"
											on:click={(e) => handleMenuClick(e, item.href)}
										>
											<span>{item.name}</span>
										</a>
									</Button>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div class="hidden w-full lg:flex lg:w-fit lg:gap-6">
					<div
						class="hidden w-full flex-wrap items-center justify-end space-y-8 lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0"
					>
						<div class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
							<Button href="#" variant="primary" size="lg">
								<span class="text-nowrap">Get Demo</span>
								<ChevronRight class="opacity-50" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
