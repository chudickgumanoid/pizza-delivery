import { LOCAL_STORAGE } from "@/utils/consts";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed } from "vue";

export const usePizzaStore = defineStore("pizza", () => {
  const pizzas = useStorage(LOCAL_STORAGE.PIZZAS, []);

  const getPrice = computed(() =>
    pizzas.value.reduce((acc, el) => acc + el.price, 0)
  );

  return { pizzas, getPrice };
});
