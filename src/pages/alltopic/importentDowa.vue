<template lang="">
  <div class="q-pa-lg text-center text-h5 bg-green q-mb-md text-white">
    প্রয়োজনিয় দুয়া
  </div>
  <div class="q-pa-lg">
    <div>
      <q-card
        class="q-pa-lg q-mb-md"
        v-for="(item, index) in sahaba"
        :key="index"
      >
        <div class="flex items-center q-col-gutter-md">
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
  },
  {
    number: "1",
    title: "প্রত্তেক নামাযের পর পড়ার দুয়া ",
    lesson: "তাসবিহ ",
  },
  {
    number: "1",
    title: "মুনাজাত #১",
    lesson: "১ টি দুয়া",
  },
  {
    number: "1",
    title: "দুয়া শুরু করার নিয়ম",
    lesson: "২টি দুয়া",
  },
  {
    number: "1",
    title: "দুয়া শেষ করার নিয়ম",
    lesson: "২টি দুয়া",
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
