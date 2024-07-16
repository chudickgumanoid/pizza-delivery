<template>
  <div
    v-if="!isFetching"
    class="tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-3"
  >
    <template
      v-for="pizza in data.catalog"
      :key="pizza.id"
    >
      <PizzaCard
        :pizza="pizza"
        @choose="handleOpenModal"
      />
    </template>
  </div>
  <div v-else>Загрузка...</div>

  <m-modal v-model:show="showCurrentPizza">
    <PizzaModal :pizza="currentPizza" />
  </m-modal>
</template>

<script setup>
import { usePizzas } from "@/utils/hooks/usePizzas";
import { ref } from "vue";
import PizzaCard from "./components/PizzaCard.vue";
import PizzaModal from "./components/PizzaModal.vue";

const { data, isFetching } = usePizzas();

const showCurrentPizza = ref(false);
const currentPizza = ref({});

const handleOpenModal = (pizza) => {
  showCurrentPizza.value = true;
  currentPizza.value = pizza;
};
</script>

<style lang="scss" scoped></style>
