<template>
  <div class="row text-center q-col-gutter-md">
    <div class="col-3" v-for="(item, index) in book" :key="index">
      <div class="text-h2"><q-icon :name="item.icon" /></div>
      <div>{{ item.text }}</div>
    </div>
  </div>
</template>

<script setup>
const book = [
  {
    icon: "menu_book",
    text: "তাফসীর",
  },
  {
    icon: "schedule",
    text: "নামাযের সময়",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
  {
    icon: "menu_book",
    text: "তাফসীর ",
  },
];
</script>
