<script>
	// stores
	import { ip } from '$lib/stores/inputStore';

	// utils
	import { fetchIPGeo } from '$lib/utils/fetchIPGeo';

	// icons
	import RightChevron from '$lib/images/icon-arrow.svg';

	const handleFetchIPGeo = async () => {
		const response = await fetchIPGeo('123');

		console.log({ response });
	};

  handleFetchIPGeo()
</script>

<div class="mb-6 relative max-w-[555px] mx-auto">
	<input
		type="text"
		placeholder="192.168.X.X"
		class="pl-6 pr-20 py-[22px] w-full rounded-[14px]"
		bind:value={$ip}
	/>
	<button
		class="absolute bg-black rounded-tr-[14px] rounded-br-[14px] top-0 right-0 bottom-0 text-white flex items-center px-[26px]"
	>
		<img src={RightChevron} alt="right chevron" />
	</button>
</div>

<div
	class="py-7 bg-white rounded-[14px] max-w-[1110px] mx-auto md:flex md:px-8 md:items-start md:justify-between md:text-left translate-y-7"
>
	<div>
		<p class="mb-6 text-xs uppercase font-bold">IP Address</p>
		<p class="text-sm md:text-lg font-bold">192.192.192.192</p>
	</div>
	<div>
		<p class="mb-6 text-xs uppercase font-bold">Location</p>
		<p class="text-sm md:text-lg font-bold">192.192.192.192</p>
	</div>
	<div>
		<p class="mb-6 text-xs uppercase font-bold">Timezone</p>
		<p class="text-sm md:text-lg font-bold">192.192.192.192</p>
	</div>
	<div>
		<p class="mb-6 text-xs uppercase font-bold">ISP</p>
		<p class="text-sm md:text-lg font-bold">192.192.192.192</p>
	</div>
</div>
