<template lang="">
  <div
    class="positions q-pa-md text-center text-h6 bg-green q-mb-md text-white"
  >
    <div class="position">
      <q-icon name="arrow_back" @click="$router.back()" />
    </div>
    <div>প্রয়োজনিয় দুয়া</div>
  </div>
  <div class="q-pa-md">
    <div>
      <q-card
        class="q-pa-sm q-mb-sm"
        v-for="(item, index) in sahaba"
        :key="index"
        @click="$router.push(item.link)"
      >
        <div class="flex  q-gutter-x-md">
          <div>
            <div class="bg-green-9 number">{{ item.number }}</div>
          </div>
          <div class="text-center text-caption items-center">
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
    title: "নামায শেষে পাঠের দুয়া",
    lesson: "১ টি দুয়া ",
    link: "/importantDua",
  },
  {
    number: "1",
    title: "প্রত্তেক নামাযের পর পড়ার দুয়া ",
    lesson: "তাসবিহ ",
    link: "/everySalat",
  },
  {
    number: "1",
    title: "মুনাজাত #১",
    lesson: "১ টি দুয়া",
    link: "/munaJat",
  },
  // {
  //   number: "1",
  //   title: "দুয়া শুরু করার নিয়ম",
  //   lesson: "২টি দুয়া",
  // },
  // {
  //   number: "1",
  //   title: "দুয়া শেষ করার নিয়ম",
  //   lesson: "২টি দুয়া",
  // },
];
</script>
<style scoped>
.number {
  border-radius: 20px;
  padding: 5px 10px 5px 10px;
  height:auto;
  width: auto;
  color: white;
  text:center;
}
.position {
  position: absolute;
}
.positions {
  position: relative;
}
</style>
]
