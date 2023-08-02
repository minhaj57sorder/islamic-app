const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/tasbihPage",
        component: () => import("pages/alltopic/inDex.vue"),
      },
      {
        path: "/salatTime",
        component: () => import("pages/alltopic/salatTime.vue"),
      },
      {
        path: "/allahrNam",
        component: () => import("pages/alltopic/allahrNam.vue"),
      },
      {
        path: "/sahabiStory",
        component: () => import("pages/alltopic/sahabaStory.vue"),
      },
      {
        path: "/importentHadis",
        component: () => import("pages/alltopic/importentHadis.vue"),
      },
      {
        path: "/importentDowa",
        component: () => import("pages/alltopic/importentDowa.vue"),
      },
      {
        path: "/bookMark",
        component: () => import("pages/alltopic/bookMark.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
