<template>
  <div
    class="relative-position q-pa-md items-center text-center text-h6 bg-green q-mb-md text-white"
  >
    <div class="absolute">
      <q-icon name="arrow_back" @click="$router.back()" />
    </div>
    <div>প্রয়োজনিয় হাদিস</div>
  </div>

  <div class="q-pa-md">
    <div>
      <q-card
        class="q-pa-sm q-mb-md"
        v-for="(item, index) in sahaba"
        :key="index"
        @click="$router.push(item.link)"
      >
        <div class="flex items-center q-gutter-x-xl">
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
    title: "নামায ",
    lesson: "নামায ",
    link: "/namajPage",
  },
  {
    number: "1",
    title: "রোযা ",
    lesson: "রোযা ",
    link: "/rojaPage",
  },
  {
    number: "1",
    title: "কুরআন",
    lesson: "কুরআন",
    link: "/hajjPage",
  },
  {
    number: "1",
    title: "যিকির",
    lesson: "যিকির",
    link: "/jakatPage",
  },
  {
    number: "1",
    title: "দিনি দাউয়াত",
    lesson: "দিনি দাউয়াত ",
    link: "/dawat",
  },
];
</script>
<style scoped>
.number {
  border-radius: 100px;
  padding: 5px 10px;
  color: white;
}
</style>
]
