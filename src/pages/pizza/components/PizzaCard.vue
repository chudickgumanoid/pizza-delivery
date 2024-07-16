<template>
  <div class="tw-flex tw-flex-col tw-gap-6">
    <m-img-link
      :src="props.pizza.img"
      class="tw-max-w-[220px] tw-mx-auto"
    />
    <div class="tw-flex tw-flex-col tw-gap-2">
      <m-text variant="h3">{{ pizza.name }}</m-text>
      <m-text variant="body">{{ pizza.description }}</m-text>
    </div>
    <div class="tw-flex tw-flex-col tw-gap-4">
      <m-text variant="h3">от {{ getPrice }}</m-text>
      <m-button @click="emit('choose', pizza)">Выбрать</m-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  pizza: Object,
});

const emit = defineEmits("choose");
const getPrice = computed(
  () => props.pizza.sizes.find((el) => el.name === "SMALL").price || 0
);
</script>

<style lang="scss" scoped></style>
