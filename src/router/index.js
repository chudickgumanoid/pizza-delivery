import * as ROUTES from "@/utils/routes";
import { createRouter, createWebHistory } from "vue-router";

// const isAuthenticated = () => {
//   const accessToken = localStorage.getItem("");
//   return !!accessToken;
// };

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME,
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: ROUTES.LOGIN,
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !isAuthenticated()) {
//     next({ name: "login" });
//   } else {
//     next();
//   }
// });

export default router;
