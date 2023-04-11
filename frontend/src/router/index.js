import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/reservas",
    name: "reservas",
    component: () => import("../views/ReservationView.vue"),
    children: [
      {
        path: "/reservas/acomodacoes",
        name: "reservasOption",
        component: () =>
          import("../components/reservation/ReservationOption.vue"),
      },
      {
        path: "/reservas/pedido-finalizado",
        name: "reservasOrder",
        component: () =>
          import("../components/reservation/ReservationOrder.vue"),
      },
    ],
  },
  {
    path: "/acomodacoes",
    name: "acomodacoes",
    component: () => import("../views/AccommodationsView.vue"),
  },
  {
    path: "/acomodacoes/:name",
    name: "acomodacoesRoom",
    component: () => import("../views/RoomPageView.vue"),
  },
  {
    path: "/contato",
    name: "contato",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/admin",
    name: "administrativo",
    component: () => import("../views/AdminView.vue"),
    children: [
      {
        path: "/admin/view-users",
        name: "adminViewUsers",
        component: () => import("../components/admin/UsersList.vue"),
      },
      {
        path: "/admin/view-reservations",
        name: "adminViewReservations",
        component: () => import("../components/admin/ReservationsList.vue"),
      },
    ],
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/perfil/:email",
    name: "perfil",
    component: () => import("../views/MyProfileView.vue"),
    children: [
      {
        path: "/perfil/:email/minhas-reservas",
        name: "minhas-reservas",
        component: () =>
          import("../components/profile/ContentMyReservation.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path == "/acomodacoes") {
      return { top: 300 };
    } else if (to.path == "/reservas") {
      return { top: 20 };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
