import { ROUTES } from "@/utils/routes";
import { createRouter, createWebHistory } from "vue-router";

// const isAuthenticated = () => {
//   const accessToken = localStorage.getItem("");
//   return !!accessToken;
// };
const layout = "AppLayoutDefault";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME,
      name: "home",
      component: () => import("@/views/PizzaView.vue"),
      meta: { layout, requiresAuth: true },
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
