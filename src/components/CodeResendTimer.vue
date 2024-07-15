<template>
  <div class="tw-text-quartenery tw-text-sm tw-max-w-[268px]">
    Запросить код повторно можно через {{ time }} секунд
  </div>
</template>

<script setup>
import { useCountdown } from "@/utils/hooks/useCountdown";

const props = defineProps({
  time: String,
});

const { time } = useCountdown(props.time);
</script>

<style lang="scss" scoped></style>
