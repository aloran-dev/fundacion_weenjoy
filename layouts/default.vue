<template>
	<main>
		<Hero />
		<Nav />
		<nuxt />
		<Footer />
	</main>
</template>

<script>
	import Hero from '~/components/Hero'
	import Nav from '~/components/Nav'
	import Footer from '~/components/Footer'

	export default {
		components: {
			Hero,
			Nav,
			Footer,
		},
	}
</script>
