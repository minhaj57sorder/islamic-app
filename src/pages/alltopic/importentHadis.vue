<template>
  <div
    class="relative-position q-pa-lg items-center text-center text-h6 bg-green q-mb-md text-white"
  >
    <div class="absolute">
      <q-icon name="arrow_back" @click="$router.back()" />
    </div>
    <div>প্রয়োজনিয় হাদিস</div>
  </div>

  <div class="q-pa-lg">
    <div>
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
    title: "কালিমা ",
    lesson: "তাসবিহ ",
  },
  {
    number: "1",
    title: "নামায ",
    lesson: "১ টি দুয়া ",
  },
  {
    number: "1",
    title: "রোযা ",
    lesson: "১ টি দুয়া",
  },
  {
    number: "1",
    title: "হজ্জ",
    lesson: "২টি দুয়া",
  },
  {
    number: "1",
    title: "যাকাত",
    lesson: "২টি দুয়া",
  },
  {
    number: "1",
    title: "দিনি দাউয়াত",
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
