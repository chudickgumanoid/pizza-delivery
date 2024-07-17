<template>
  <div class="tw-flex tw-flex-col tw-gap-6">
    <div class="tw-flex tw-flex-col tw-gap-6">
      <template
        v-for="pizza in storePizza.pizzas"
        :key="pizza.name"
      >
        <BasketItem :pizza="pizza" />
      </template>
    </div>

    <div class="tw-w-full tw-h-[1px] tw-bg-[#E3E5E5] tw-rounded-full" />

    <BasketPrice />
  </div>
</template>

<script setup>
import { usePizzaStore } from "@/stores/pizza";
import BasketItem from "./components/BasketItem.vue";
import BasketPrice from "./components/BasketPrice.vue";

const storePizza = usePizzaStore();
</script>

<style lang="scss" scoped></style>
