<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	/**
	 * @type {*}
	 */
	let map;

	/**
	 * @type {HTMLDivElement | *}
	 */
	let mapElement;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([-8.547913, 115.169539], 15);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			leaflet.marker([-8.547913, 115.169539]).addTo(map);
		}
	});

	onDestroy(() => {
		if (map) {
			map.destroy();
		}
	});
</script>

<div class="w-full h-full" bind:this={mapElement} />

<style>
	@import 'leaflet/dist/leaflet.css';
</style>
