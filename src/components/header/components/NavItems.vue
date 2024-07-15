<template>
  <div class="tw-flex tw-gap-8">
    <template
      v-for="nav in items"
      :key="nav.title"
    >
      <HeaderItem :nav="nav" />
    </template>
  </div>
</template>

<script setup>
import HeaderItem from "./HeaderItem.vue";

defineProps({
  items: Array,
});
</script>

<style lang="scss" scoped></style>
