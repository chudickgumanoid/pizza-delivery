<template>
  <AppLayout>
    <router-view />
  </AppLayout>
  <VueQueryDevtools />
</template>

<script setup>
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import AppLayout from "./layouts/AppLayout.vue";
</script>

<style lang="scss" scoped></style>
