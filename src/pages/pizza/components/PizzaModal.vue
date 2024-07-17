<template>
  <div class="tw-flex tw-gap-4 tw-h-full tw-max-h-full">
    <div class="tw-flex-[0_0_30%]">
      <m-img-link
        :src="props.pizza.img"
        class="tw-max-w-[220px]"
      />
    </div>
    <div class="tw-flex-[1_1_70%] tw-overflow-y-auto tw-p-4 tw-relative">
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

      <m-button @click="setToBasket"> Добавить в корзину </m-button>
    </div>
  </div>
</template>

<script setup>
import { PIZZA_DOUGHS, PIZZA_SIZES } from "@/utils/consts";
import { computed, ref } from "vue";
import IngredientCard from "./IngredientCard.vue";
import { usePizzaStore } from "@/stores/pizza";

const props = defineProps({
  pizza: Object,
});

const storePizza = usePizzaStore();
const ingredients = ref([]);

const handleChoose = (ingredient) => {
  const index = ingredients.value.findIndex(
    (el) => el.name === ingredient.name
  );

  if (index !== -1) ingredients.value.splice(index, 1);
  else ingredients.value.push(ingredient);
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

const setToBasket = () => {
  const size = props.pizza.sizes.find(
    (el) => tabsSize.value.currentTab === el.name
  );
  const dough = props.pizza.doughs.find(
    (el) => tabsDoughs.value.currentTab === el.name
  );
  const dopingsPrice = ingredients.value.reduce((acc, el) => acc + el.cost, 0);
  const pizza = {
    // id: "1", // TODO: возможно понадобится, надо на бек посмотреть
    name: props.pizza.name,
    toppings: [...ingredients.value],
    description: props.pizza.description,
    size: {
      name: size.name,
      price: size.price,
    },
    doughs: {
      name: dough.name,
      price: dough.price,
    },
    price: size.price + dough.price + dopingsPrice,
    img: props.pizza.img,
  };
  storePizza.pizzas.push(pizza);
};
</script>

<style lang="scss" scoped></style>
