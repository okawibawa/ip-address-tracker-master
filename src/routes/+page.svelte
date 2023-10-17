<script>
	// components
	import Map from '$lib/components/map/map.svelte';
	import Details from '$lib/components/details/details.svelte';
</script>

<div
	class="bg-[url('$lib/images/pattern-bg-desktop.png')] bg-center bg-no-repeat bg-cover max-h-[300px] md:max-h-[280px]"
>
	<div class="mx-6 py-8 text-center">
		<h1 class="text-lg text-white mb-9 font-bold">IP Address Tracker</h1>
		<Details />
	</div>
</div>

<div class="h-screen max-h-screen -z-10 relative"><Map /></div>
