<template>
  <img
    :src="url + src"
    :alt="getAlt"
  />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  src: String,
});

const getAlt = computed(() => props.src);
const url = import.meta.env.VITE_BASE_API_URL;
</script>

<style lang="scss" scoped></style>
