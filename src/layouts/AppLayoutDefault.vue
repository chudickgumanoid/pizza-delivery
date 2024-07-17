<template>
  <div>
    <Header />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/header/Header.vue";
</script>

<style scoped>
.container {
  padding: 48px 0;
}
</style>
