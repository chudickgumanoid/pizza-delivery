<template>
  <div class="card tw-flex tw-flex-col tw-gap-6 tw-h-full">
    <m-img-link
      :src="pizza.img"
      :alt="pizza.name"
      class="tw-max-w-[220px] tw-mx-auto"
    />
    <div class="tw-flex tw-flex-col tw-gap-2">
      <m-text variant="h3">{{ pizza.name }}</m-text>
      <m-text variant="body">{{ pizza.description }}</m-text>
    </div>
    <div class="tw-flex tw-flex-col tw-gap-4 tw-mt-auto">
      <m-text variant="h3">от {{ toLocaleString(getPrice) }}</m-text>
      <m-button @click="emit('choose', pizza)">Выбрать</m-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { toLocaleString } from "@/utils/helper/toLocaleString";

const props = defineProps({
  pizza: Object,
});

const emit = defineEmits("choose");
const getPrice = computed(
  () => props.pizza.sizes.find((el) => el.name === "SMALL").price || 0
);
</script>

<style lang="scss" scoped></style>
