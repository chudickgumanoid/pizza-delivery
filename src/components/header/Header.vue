<template>
  <div class="tw-border-b tw-border-red-300 tw-border-solid tw-w-full tw-py-4">
    <div class="container">
      <div class="tw-flex tw-justify-between tw-items-center">
        <div class="tw-flex tw-items-center">
          <router-link to="/">
            <img
              src="/public/img/logo.png"
              alt="pizza logo"
            />
          </router-link>

          <div class="tw-flex tw-gap-8">
            <template
              v-for="nav in navItems.left"
              :key="nav.title"
            >
              <HeaderItem :nav="nav" />
            </template>
          </div>
        </div>

        <div class="tw-flex tw-gap-8">
          <template
            v-for="nav in navItems.right"
            :key="nav.title"
          >
            <HeaderItem :nav="nav" />
          </template>
        </div>
      </div>
    </div>
  </div>

  <m-modal
    v-model:show="showModal"
    :hideClose="true"
  >
    <LoginModal />
  </m-modal>
</template>

<script setup>
import BasketIcon from "@/components/UI/icons/BasketIcon.vue";
import LoginIcon from "@/components/UI/icons/LoginIcon.vue";
import TimeIcon from "@/components/UI/icons/TimeIcon.vue";
import UserIcon from "@/components/UI/icons/UserIcon.vue";
import { ROUTES } from "@/utils/routes";
import { ref } from "vue";
import HeaderItem from "./components/HeaderItem.vue";
import LoginModal from "@/pages/login/LoginModal.vue";

const showModal = ref(false);
const navItems = ref({
  left: [
    {
      title: "Профиль",
      path: ROUTES.PROFILE,
      icon: UserIcon,
    },
    {
      title: "заказы",
      path: ROUTES.ORDERS,
      icon: TimeIcon,
    },
  ],
  right: [
    {
      title: "Корзина",
      path: ROUTES.BASKET,
      icon: BasketIcon,
    },
    {
      title: "Войти",
      onClick() {
        showModal.value = true;
      },
      icon: LoginIcon,
    },
  ],
});
</script>

<style lang="scss" scoped></style>
