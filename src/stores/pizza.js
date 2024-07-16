import { LOCAL_STORAGE } from "@/utils/consts";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const usePizzaStore = defineStore("pizza", () => {
  const pizzas = useStorage(LOCAL_STORAGE.PIZZAS, []);

  return { pizzas };
});
