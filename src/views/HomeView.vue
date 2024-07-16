<template>
  <div>{{ data }}</div>
</template>

<script setup>
import { usePizzas } from "@/utils/hooks/usePizzas";

const { data } = usePizzas();
</script>

<style lang="scss" scoped></style>
