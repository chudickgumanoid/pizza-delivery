<template>
  <div
    v-if="!isFinished"
    class="tw-text-quartenery tw-text-sm tw-max-w-[268px]"
  >
    Запросить код повторно можно через {{ time }} секунд
  </div>
  <m-text
    v-else
    variant="h5"
    class="tw-text-center tw-transition-all hover:tw-opacity-85 tw-cursor-pointer"
    @click="handleResend"
  >
    Запросить код ещё раз
  </m-text>
</template>

<script setup>
import { useCountdown } from "@/utils/hooks/useCountdown";

const props = defineProps({
  time: String,
});

const emit = defineEmits(["resend"]);

const { time, isFinished, reset } = useCountdown(props.time);

const handleResend = () => {
  reset();
  emit("resend");
};
</script>

<style lang="scss" scoped></style>
