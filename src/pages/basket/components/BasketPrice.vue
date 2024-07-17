<template>
  <div class="tw-flex tw-items-center tw-justify-between tw-gap-4">
    <m-text variant="h2">
      Стоимость заказа: {{ toLocaleString(storePizza.getPrice) }}
    </m-text>
    <m-button class="tw-max-w-[328px]">Оформить заказ</m-button>
  </div>
</template>

<script setup>
import { usePizzaStore } from "@/stores/pizza";
import { toLocaleString } from "@/utils/helper/toLocaleString";

const storePizza = usePizzaStore();
</script>

<style lang="scss" scoped></style>
