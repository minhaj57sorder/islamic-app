<template lang="">
  <div class="q-pa-lg text-center text-h6 bg-green q-mb-md text-white">
    সাহাবাদের ইতিহাস
  </div>
  <div class="q-pa-lg">
    <div @click="$router.push('/historyOne')">
      <q-card
        class="q-pa-lg q-mb-md"
        v-for="(item, index) in sahaba"
        :key="index"
      >
        <div class="flex items-center q-col-gutter-xl">
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
    title: "ওমোর (রা) এর জীবন কাহিনী",
    lesson: "15 lesson",
  },
  {
    number: "1",
    title: "ওমোর (রা) এর জীবন কাহিনী",
    lesson: "15 lesson",
  },
  {
    number: "1",
    title: "ওমোর (রা) এর জীবন কাহিনী",
    lesson: "15 lesson",
  },
  {
    number: "1",
    title: "ওমোর (রা) এর জীবন কাহিনী",
    lesson: "15 lesson",
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
