import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import EventDetail from "@/views/EventDetail.vue";
import Events from "@/views/Events.vue";
import Contact from "@/views/Contact.vue";
import Gallery from "@/views/Gallery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/events",
    name: "events",
    component: Events
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    component: EventDetail
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
