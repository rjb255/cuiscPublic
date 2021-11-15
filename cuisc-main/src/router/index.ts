import { createRouter, createWebHashHistory, Router } from "vue-router";
import Home from "../views/Home.vue";

const routes: any = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ "../views/About.vue");
        },
    },
    {
        path: "/statutes",
        name: "Statutes",
        component: function () {
            return import("../views/Statutes.vue");
        },
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: function () {
            return import("../views/Gallery.vue");
        }
    },
];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
