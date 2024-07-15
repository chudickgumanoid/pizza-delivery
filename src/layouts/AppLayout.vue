<script setup>
import { markRaw, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import AppLayoutDefault from "./AppLayoutDefault.vue";

const layout = ref();
const route = useRoute();

watchEffect(async () => {
  try {
    const layouts = [
      {
        name: "AppLayoutDefault",
        layout: AppLayoutDefault,
      },
    ];
    const metaLayout = route.meta.layout;

    const component = layouts.find((e) => metaLayout == e.name);
    if (component == undefined) {
      throw "component undifned";
    }
    layout.value = markRaw(component.layout || AppLayoutDefault);
  } catch (e) {
    layout.value = markRaw(AppLayoutDefault);
  }
});
</script>

<template>
  <component :is="layout"> <router-view /> </component>
</template>
