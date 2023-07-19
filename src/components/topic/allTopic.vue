<template>
  <q-list class="row text-center q-col-gutter-md">
    <q-item
      clickable
      v-ripple
      :to="item.link"
      class="col-3"
      v-for="(item, index) in book"
      :key="index"
    >
      <div>
        <div class="text-h2"><q-icon :name="item.icon" /></div>
        <div>{{ item.text }}</div>
      </div>
    </q-item>
  </q-list>
</template>

<script setup>
const book = [
  {
    icon: "countertops",
    text: "তাসবীহ ",
    link: "/tasbihPage",
  },
  {
    icon: "schedule",
    text: "নামাযের সময়",
  },
  {
    icon: "history_edu",
    text: "সাহাবাদের গল্প  ",
  },
  {
    icon: "manage_search",
    text: "গুরুত্তপূর্ণ দুয়া",
  },
  {
    icon: "manage_history",
    text: "গুরুত্তপূর্ণ হাদিস ",
  },
  {
    icon: "manage_search",
    text: "আল্লাহর ৯৯ নাম",
  },
  {
    icon: "settings",
    text: "সেটিং ",
  },
];
</script>
