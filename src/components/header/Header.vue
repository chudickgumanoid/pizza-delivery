<template>
  <div class="tw-border-b tw-border-red-300 tw-border-solid tw-w-full tw-py-4">
    <div class="container">
      <div class="tw-flex tw-justify-between tw-items-center">
        <div class="tw-flex tw-items-center">
          <router-link to="/">
            <img
              src="/img/logo.png"
              alt="pizza logo"
            />
          </router-link>

          <NavItems :items="navItems.left" />
        </div>

        <NavItems :items="navItems.right" />
      </div>
    </div>
  </div>

  <m-modal
    v-model:show="showModal"
    :hideClose="true"
  >
    <LoginModal @create="showModal = false" />
  </m-modal>
</template>

<script setup>
import BasketIcon from "@/components/UI/icons/BasketIcon.vue";
import LoginIcon from "@/components/UI/icons/LoginIcon.vue";
import TimeIcon from "@/components/UI/icons/TimeIcon.vue";
import UserIcon from "@/components/UI/icons/UserIcon.vue";
import LoginModal from "@/pages/login/LoginModal.vue";
import { useAuthStore } from "@/store/auth";
import { ROUTES } from "@/utils/routes";
import { computed, ref } from "vue";
import NavItems from "./components/NavItems.vue";

const storeAuth = useAuthStore();

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
  right: computed(() => [
    {
      title: "Корзина",
      path: ROUTES.BASKET,
      icon: BasketIcon,
    },
    {
      title: storeAuth.isAuth ? "Выйти" : "Войти",
      onClick() {
        if (storeAuth.isAuth) storeAuth.handleLogout();
        else showModal.value = true;
      },
      icon: LoginIcon,
    },
  ]),
});
</script>

<style lang="scss" scoped></style>
