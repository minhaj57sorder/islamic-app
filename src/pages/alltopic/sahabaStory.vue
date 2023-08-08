<template lang="">
  <div
    class="relative-position q-pa-lg items-center text-center text-h6 bg-green q-mb-md text-white"
  >
    <div class="absolute">
      <q-icon name="arrow_back" @click="$router.back()" />
    </div>
    <div>সাহাবাদের ইতিহাস</div>
  </div>

  <div class="q-pa-lg">
    <div>
      <q-card
        class="q-pa-lg q-mb-md"
        v-for="(item, index) in sahaba"
        :key="index"
        @click="$router.push(item.link)"
      >
        <div class="flex items-center q-col-gutter-md">
          <div>
            <div class="bg-green-9 number">{{ item.number }}</div>
          </div>
          <div class="text-center items-center">
            <div class="text-body1">{{ item.title }}</div>
            <div class="text-grey-6">{{ item.lesson }}</div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script setup>
const sahaba = [
  {
    number: "1",
    title: " হযরত আবু বকর (রা) এর জীবনী",
    lesson: "15 lesson",
    link: "/abubakkar",
  },
  {
    number: "1",
    title: "হযরত উমর  (রা) এর জীবনী ",
    lesson: "15 lesson",
    link: "/historyOne",
  },
  {
    number: "1",
    title: "হযরত উসমান (রা) এর জীবনী ",
    lesson: "15 lesson",
    link: "/usmanHistory",
  },
  {
    number: "1",
    title: "হযরত আলী  (রা) এর জীবনী ",
    lesson: "15 lesson",
    link: "/aliHostory",
  },
];
</script>
<style scoped>
.number {
  border-radius: 100px;
  padding: 10px 15px;
  color: white;
}
</style>
]
