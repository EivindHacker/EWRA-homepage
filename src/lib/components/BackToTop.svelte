<script lang="ts">
	import { scrollY } from 'svelte/reactivity/window';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import { cn } from '../utils';

	// Show button when user scrolls down more than 300px
	let isVisible = $derived.by(() => {
		if (scrollY.current !== undefined && scrollY.current > 300) {
			return true;
		}
		return false;
	});

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

{#if isVisible}
	<button
		onclick={scrollToTop}
		class={cn(
			'fixed right-3 bottom-3 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none',
			'animate-in duration-300 fade-in slide-in-from-bottom-4'
		)}
		aria-label="Back to top"
	>
		<ChevronUp class="h-6 w-6" />
	</button>
{/if}
