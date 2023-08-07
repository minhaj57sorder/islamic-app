<template lang="">
  <div
    class="q-pa-lg flex q-col-gutter-lg items-center text-h6 bg-green q-mb-md text-white"
  >
    <div class="position flex">
      <q-icon name="arrow_back" @click="$router.back()" />
    </div>
    <div class="text-center" quasar dev>সাহাবাদের ইতিহাস</div>
  </div>
  <div class="q-pa-lg">
    <div @click="$router.push('/abubakkar')">
      <q-card
        class="q-pa-lg q-mb-md"
        v-for="(item, index) in sahaba"
        :key="index"
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
    title: "ওমোর (রা) এর জীবন কাহিনী",
    lesson: "15 lesson",
    link: "/historyOne",
  },
  {
    number: "1",
    title: "আবু বকর (রা) এর জীবন কাহিনী",
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
