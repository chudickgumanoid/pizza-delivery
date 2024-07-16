<template>
  <div class="tw-flex tw-gap-4 tw-h-full tw-max-h-full">
    <div class="tw-flex-[0_0_30%]">
      <m-img-link
        :src="props.pizza.img"
        class="tw-max-w-[220px] mxau"
      />
    </div>
    <div class="tw-flex-[1_1_70%] tw-max-h-[90vh] tw-overflow-y-auto tw-p-4">
      <div class="tw-flex tw-flex-col tw-gap-2">
        <m-text variant="h3">{{ pizza.name }}</m-text>
        <m-text variant="body">{{ getSize }} см, {{ getDough }}</m-text>
        <m-text variant="body">{{ pizza.description }}</m-text>
      </div>

      <div class="tw-flex tw-flex-col tw-gap-2">
        <m-tab
          ref="tabsSize"
          :options="tabOptionsSize"
          :default="'SMALL'"
        />
        <m-tab
          ref="tabsDoughs"
          :options="tabOptionsDoughs"
          :default="'THIN'"
        />
      </div>

      <m-text variant="h5">Добавить по вкусу</m-text>

      <div class="tw-grid tw-grid-cols-3 tw-gap-2">
        <div
          v-for="ingredient in props.pizza.ingredients"
          :key="ingredient.name"
        >
          <IngredientCard
            :ingredient
            @choose="handleChoose"
          />
        </div>
      </div>
      {{ ingredients.length }}
      <m-button>Добавить в корзину</m-button>
    </div>
  </div>
</template>

<script setup>
import { PIZZA_DOUGHS, PIZZA_SIZES } from "@/utils/consts";
import { computed, ref } from "vue";
import IngredientCard from "./IngredientCard.vue";

const props = defineProps({
  pizza: Object,
});
const ingredients = ref([]);
const handleChoose = (ingredient) => {
  if (ingredient.name) {
    ingredients.value = ingredients.value.filter(
      (el) => el.name !== ingredient.name
    );
  }
  ingredients.value.push(ingredient);
};

const tabsSize = ref({ isTab: () => "", currentTab: "SMALL" });
const tabOptionsSize = ref([
  {
    label: "Маленькая",
    key: "SMALL",
  },
  { label: "Средняя", key: "MEDIUM" },
  { label: "Большая", key: "LARGE" },
]);

const tabsDoughs = ref({ isTab: () => "", currentTab: "THIN" });
const tabOptionsDoughs = ref([
  {
    label: "Традиционное",
    key: "THIN",
  },
  { label: "Тонкое", key: "THICK" },
]);

const getSize = computed(() => PIZZA_SIZES[tabsSize.value.currentTab] || 30);

const getDough = computed(
  () =>
    PIZZA_DOUGHS[tabsDoughs.value.currentTab].toLowerCase() + " тесто" ||
    "традиционное тесто"
);
</script>

<style lang="scss" scoped></style>
