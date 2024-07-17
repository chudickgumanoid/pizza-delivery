<template>
  <div
    @click="handleChoose"
    class="card"
    :class="{ '!tw-border-primary': isChoose }"
  >
    <m-img-link
      :src="props.ingredient.img"
      class="tw-max-w-[108px]"
    />
    <m-text>{{ props.ingredient.name }}</m-text>
    <m-text>{{ toLocaleString(props.ingredient.cost) }}</m-text>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { toLocaleString } from "@/utils/helper/toLocaleString";

const props = defineProps({
  ingredient: Object,
});

const emit = defineEmits(["choose"]);
const isChoose = ref(false);

const handleChoose = () => {
  emit("choose", props.ingredient);
  isChoose.value = !isChoose.value;
};
</script>

<style lang="scss" scoped>
.card {
  @apply tw-flex tw-flex-col tw-cursor-pointer tw-items-center tw-justify-center tw-gap-2 tw-shadow-[0px_4px_12px_0px_#1A1A1E26] tw-bg-white tw-p-2 tw-rounded-2xl tw-border-2 tw-border-transparent tw-border-solid tw-transition-all;
}
</style>
