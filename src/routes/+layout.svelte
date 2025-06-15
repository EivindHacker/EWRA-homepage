<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import FlowingCirclesOverlay from '$lib/components/FlowingCirclesOverlay.svelte';

	let { children } = $props();
</script>

<main
	class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-950 to-black text-white"
>
	<Navbar />
	<FlowingCirclesOverlay />
	{@render children()}
</main>
