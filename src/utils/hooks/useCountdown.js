import { computed, onUnmounted, ref } from "vue";

export const useCountdown = (initialTime) => {
  const time = ref(Math.floor(initialTime / 1000));
  let interval;

  const startCountdown = () => {
    interval = setInterval(() => {
      if (time.value > 0) {
        time.value -= 1;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  const reset = () => {
    clearInterval(interval);
    time.value = Math.floor(initialTime / 1000);
    startCountdown();
  };

  startCountdown();

  onUnmounted(() => {
    clearInterval(interval);
  });

  const isFinished = computed(() => time.value === 0);

  return { time, isFinished, reset };
};
