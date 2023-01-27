<script setup lang="ts">
import { ref } from 'vue'
import { getTodo } from './services'

defineProps<{ msg: string }>()
const count = ref(0)

const ready = computed(() => count.value !== 0)
const { data } = useRequest(() => getTodo({ id: count.value }), {
	ready,
	refreshDeps: [count],
})
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
	</div>
	<div>
		{{ JSON.stringify(data) }}
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
