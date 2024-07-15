<template>
  <router-link
    v-if="nav.path"
    :to="nav.path"
    class="tw-flex tw-gap-4"
  >
    <component :is="nav.icon" /> {{ nav.title }}
  </router-link>
  <div
    v-else
    class="tw-flex tw-gap-4 tw-cursor-pointer"
    @click="nav.onClick"
  >
    <component :is="nav.icon" /> {{ nav.title }}
  </div>
</template>

<script setup>
defineProps({
  nav: Object,
});
</script>

<style lang="scss" scoped></style>
