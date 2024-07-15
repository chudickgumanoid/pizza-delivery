<template>
  <div>
    Авторизация
    {{ formState.phone }}

    <m-input
      v-model="formState.phone"
      placeholder="Телефон"
      mask="+7 (###) ###-##-##"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const formState = ref({
  phone: "",
});
</script>

<style lang="scss" scoped></style>
