<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
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
	<HelloWorld msg="Vite + Vue + VueHooks Plus" />
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
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
