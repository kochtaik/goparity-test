<template>
  <progress :value="progress" max="100"></progress>
</template>

<script setup lang="ts">
const props = defineProps<{
  progress: number
}>()
</script>

<style scoped>
progress[value]::-webkit-progress-bar {
  @apply w-28 h-4 bg-gray-400 rounded;
}

progress[value]::-webkit-progress-value {
  @apply rounded;
  @apply max-w-full bg-gradient-to-r from-blue-800 to-black;
}
</style>
