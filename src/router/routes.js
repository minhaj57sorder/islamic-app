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
      {
        path: "/historyOne",
        component: () => import("pages/data/sahaba/omor/historyOne.vue"),
      },
      {
        path: "/abubakkar",
        component: () => import("pages/data/sahaba/abu/historyTow.vue"),
      },
      {
        path: "/aliHostory",
        component: () => import("pages/data/sahaba/ali/aliHistory.vue"),
      },
      {
        path: "/usmanHistory",
        component: () => import("pages/data/sahaba/usman/usmanHistory.vue"),
      },
      {
        path: "/importantDua",
        component: () => import("pages/data/dowa/namaj/namajDuwa.vue"),
      },
      {
        path: "/everySalat",
        component: () => import("pages/data/dowa/namaj/everySalat.vue"),
      },
      {
        path: "/munaJat",
        component: () => import("pages/data/dowa/namaj/munaJat.vue"),
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
