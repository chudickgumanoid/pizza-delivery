<template>
  <div
    @click="handleChoose"
    class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-shadow-[0px_4px_12px_0px_#1A1A1E26] tw-bg-white tw-p-2 tw-rounded-2xl"
  >
    <m-img-link
      :src="props.ingredient.img"
      class="tw-max-w-[108px]"
    />
    <m-text>{{ props.ingredient.name }}</m-text>
    <m-text>{{ props.ingredient.cost }}</m-text>
  </div>
</template>

<script setup>
const props = defineProps({
  ingredient: Object,
});

const emit = defineEmits(["choose"]);

const handleChoose = () => {
  emit("choose", props.ingredient);
};
</script>

<style lang="scss" scoped></style>
