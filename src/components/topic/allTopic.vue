<template>
  <q-list class="row text-center">
    <q-item
      class="col-3 border justify-center"
      v-for="(item, index) in book"
      :key="index"
    >
      <div class="text-center">
        <div class="text-h3">
          <q-icon :name="item.icon" @click="$router.push(item.link)" />
        </div>
        <div class="text-body2">{{ item.text }}</div>
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
    link: "/salatTime",
  },
  {
    icon: "history_edu",
    text: "সাহাবাদের গল্প  ",
    link: "sahabiStory",
  },
  {
    icon: "manage_search",
    text: "গুরুত্তপূর্ণ দুয়া",
    link: "importentDowa",
  },
  {
    icon: "manage_history",
    text: "গুরুত্তপূর্ণ হাদিস ",
    link: "/importentHadis",
  },
  {
    icon: "manage_search",
    text: "আল্লাহর ৯৯ নাম",
    link: "/allahrNam",
  },
  {
    icon: "bookmark",
    text: "বুকমার্ক ",
    link: "/bookMark",
  },
];
</script>

<style scoped>
.border {
  z-index: 1;
}
</style>
