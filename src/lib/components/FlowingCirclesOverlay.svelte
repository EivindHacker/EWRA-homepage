<script lang="ts">
	import { onMount } from 'svelte';
	let circles: HTMLCanvasElement;

	function animateCircles(
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		circleData: any[]
	) {
		ctx.clearRect(0, 0, width, height);
		for (const c of circleData) {
			ctx.beginPath();
			ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
			ctx.fillStyle = `rgba(255,255,255,${c.a})`;
			ctx.shadowColor = 'rgba(255,255,255,0.5)';
			ctx.shadowBlur = 16;
			ctx.fill();
			c.x += c.vx;
			c.y += c.vy;
			if (c.x - c.r > width) c.x = -c.r;
			if (c.x + c.r < 0) c.x = width + c.r;
			if (c.y - c.r > height) c.y = -c.r;
			if (c.y + c.r < 0) c.y = height + c.r;
		}
	}

	onMount(() => {
		const canvas = circles;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		let width = (canvas.width = canvas.offsetWidth);
		let height = (canvas.height = canvas.offsetHeight);
		let circleData = Array.from({ length: 12 }, () => ({
			x: Math.random() * width,
			y: Math.random() * (height - 80), // Avoid bottom 80px
			r: 60 + Math.random() * 40,
			a: 0.03 + Math.random() * 0.04, // Lower alpha for more transparency
			vx: (Math.random() - 0.5) * 0.3,
			vy: (Math.random() - 0.5) * 0.3
		}));
		let running = true;
		function loop() {
			if (!running) return;
			width = canvas.width = canvas.offsetWidth;
			height = canvas.height = canvas.offsetHeight;
			// Prevent circles from entering the bottom 80px
			for (const c of circleData) {
				if (c.y + c.r > height - 80) {
					c.y = height - 80 - c.r;
					c.vy = -Math.abs(c.vy); // bounce upward
				}
			}
			animateCircles(ctx, width, height, circleData);
			requestAnimationFrame(loop);
		}
		loop();
		return () => {
			running = false;
		};
	});
</script>

<canvas bind:this={circles} class="pointer-events-none absolute inset-0 z-0 h-full w-full"></canvas>
