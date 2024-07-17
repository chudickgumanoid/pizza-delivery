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
        :isLoad="isFetching"
        :pizza="pizza"
        @choose="handleOpenModal"
      />
    </template>
  </div>
  <div v-else>
    <div
      class="tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-3"
    >
      <template
        v-for="i in 6"
        :key="i"
      >
        <div class="tw-flex tw-flex-col tw-gap-4">
          <m-skeleton
            :rowCount="1"
            rowHeight="368px"
          />
          <m-skeleton
            :rowCount="1"
            rowHeight="68px"
          />
        </div>
      </template>
    </div>
  </div>

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
