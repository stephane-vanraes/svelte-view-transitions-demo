<script>
	import { onNavigate } from '$app/navigation';
	export let data;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<h1>{data.fjell.name}</h1>
<img src={data.fjell.img} alt="" />

<style>
	h1 {
		text-transform: capitalize;
	}
	img {
		aspect-ratio: 2 / 1;
		margin: auto;
		object-fit: fill;
		view-transition-name: image;
		width: 100%;
	}
</style>
