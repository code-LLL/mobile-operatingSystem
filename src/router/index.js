import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home");
const Work = () => import("../views/Work");
const Meg = () => import("../views/Meg");
const Learn = () => import("../views/Learn");
const Mobile = () => import("../views/Mobile");
const Resource = () => import("../views/Resource");
const Teach = () => import("../views/Teach");

Vue.use(VueRouter);
const linkActiveClass = "active";
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/work",
    name: "work",
    component: Work
  },
  {
    path: "/meg",
    name: "meg",
    component: Meg
  },
  {
    path: "/learn",
    name: "learn",
    component: Learn
  },
  {
    path: "/mobile",
    name: "mobile",
    component: Mobile
  },
  {
    path: "/teach",
    name: "teach",
    component: Teach
  },
  {
    path: "/resource",
    name: "resource",
    component: Resource
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass
});

export default router;
