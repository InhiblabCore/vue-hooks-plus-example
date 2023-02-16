<script setup>
import Setup from './components/Setup.vue'
</script>

<template>
	<div>
		<a href="https://webpack.js.org/" target="_blank">
			<img src="/logo.svg" class="logo" alt="Webpack logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
		<a href="https://github.com/InhiblabCore/vue-hooks-plus" target="_blank">
			<img
				src="https://raw.githubusercontent.com/InhiblabCore/vue-hooks-plus/master/packages/hooks/docs/public/logo.svg"
				class="logo vue"
				alt="VueHooks Plus logo"
			/>
		</a>
	</div>
	<Setup msg="Webpack + Vue + VueHooks Plus" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
