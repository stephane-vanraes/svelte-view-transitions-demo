<script>
	import { afterNavigate, onNavigate } from '$app/navigation';

	export let data;

	let cur_image;
	const images = {};

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		cur_image && cur_image.classList.remove('image');
		images[navigation.to.params.slug].classList.add('image');

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();

				await navigation.complete;
			});
		});
	});

	afterNavigate((navigation) => {
		cur_image = images[navigation.from?.params.slug];
		cur_image && cur_image.classList.add('image');
	});
</script>

<h1>Bergen</h1>
<div>
	{#each data.fjell as { name, img } (name)}
		<a href="/{name}" bind:this={images[name]}>
			<img src={img} alt="" />
		</a>
	{/each}
</div>

<style>
	div {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
	img {
		aspect-ratio: 2 / 1;
		object-fit: fill;
		width: 100%;
	}
</style>
