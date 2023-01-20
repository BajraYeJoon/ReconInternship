import { createRouter, createWebHistory } from "vue-router";

// Importing Components
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Details from "../views/Details.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/details/:date",
    name: "Details",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
