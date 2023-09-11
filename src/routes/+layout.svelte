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

<style>
	header,
	main {
		margin: auto;
		max-width: 120ch;
	}
</style>
