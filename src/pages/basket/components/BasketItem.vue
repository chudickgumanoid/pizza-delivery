<template>
  <div class="tw-grid tw-grid-cols-[1fr_1.5fr_3fr_1fr_1fr_1fr_auto] tw-gap-6">
    <m-img-link
      :src="props.pizza.img"
      class="tw-max-w-[62px]"
    />
    <m-text variant="h5">{{ props.pizza.name }}</m-text>
    <m-text variant="paragraph">{{ props.pizza.description }}</m-text>
    <div>
      <m-input
        v-model:value="count"
        :counter="true"
      />
    </div>
    <m-button
      variant="link"
      size="sm"
      class="!tw-text-quartenery !tw-font-normal !tw-text-xs"
    >
      Изменить
    </m-button>
    <m-text variant="h5">{{ toLocaleString(props.pizza.price) }} р</m-text>
    <div class="hover:tw-opacity-50 tw-cursor-pointer tw-transition-all">
      <cross-icon />
    </div>
  </div>
</template>

<script setup>
import { toLocaleString } from "@/utils/helper/toLocaleString";
import { ref } from "vue";

const count = ref(1);

const props = defineProps({
  pizza: Object,
});
</script>

<style lang="scss" scoped></style>
