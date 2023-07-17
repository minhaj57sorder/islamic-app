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
    icon: "countertops",
    text: "তাসবীহ ",
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
