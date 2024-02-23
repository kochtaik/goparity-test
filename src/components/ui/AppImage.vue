<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  src: string
  alt: string
}>()

const isLoading = ref(true)

function finishLoading(): void {
  isLoading.value = false
}
</script>

<template>
  <div v-if="isLoading" class="placeholder"></div>
  <img :src="src" :alt="alt" @load="finishLoading" />
</template>

<style scoped>
img {
  @apply h-full;
}
.placeholder {
  @apply w-full h-full;
  @apply animate-pulse bg-gray-400;
}
</style>
