<script lang="ts">
	import '../app.css';
	import FlowingCirclesOverlay from '$lib/components/FlowingCirclesOverlay.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	let { children } = $props();
</script>

<main
	class="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 to-black text-white"
>
	<Header />
	<FlowingCirclesOverlay />
	{@render children()}
	<Footer />
	<BackToTop />
</main>
