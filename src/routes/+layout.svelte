<script>
	import './global.css';
</script>

<header>
	<nav>
		<a href="/">Home</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<a href="https://github.com/stephane-vanraes/svelte-view-transitions-demo">Github</a>
</footer>

<style>
	header,
	main {
		margin: auto;
		max-width: 120ch;
	}
</style>
