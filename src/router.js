import Vue from "vue";
import Router from "vue-router";
import store from "./store/store";
import Home from "./views/Home";
import About from "./views/About";
import Admin from "./views/Admin";
import Login from "./views/Login";
import Game from "./views/Game";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/game",
      name: "game",
      component: Game
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
