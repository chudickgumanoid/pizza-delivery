import { LOCAL_STORAGE } from "@/utils/consts";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isAuthRef = ref(false);

  const isAuth = computed(() => {
    const token = localStorage.getItem(LOCAL_STORAGE.TOKEN);
    if (!token) {
      isAuthRef.value = false;
    } else {
      isAuthRef.value = true;
    }

    return isAuthRef.value;
  });

  const handleLogin = () => (isAuthRef.value = true);

  const handleLogout = () => {
    isAuthRef.value = false;
    localStorage.removeItem(LOCAL_STORAGE.TOKEN);
  };

  return {
    isAuth,
    handleLogin,
    handleLogout,
  };
});
