<template lang="">
  <div class="text-center text-h5 text-white bg-green border q-pa-md q-mb-md">
    আল্লাহর ৯৯ নাম আরবি , বাংলা , অর্থসহ
  </div>
  <div class="q-pa-lg">
    <div>
      <q-card
        class="flex justify-between items-center q-mb-sm q-pa-md"
        v-for="(item, index) in name"
        :key="index"
      >
        <div class="flex q-col-gutter-xl items-center">
          <div>
            <div class="bg-green-9 rounded">{{ item.number }}</div>
          </div>
          <div>
            <div class="text-body1">{{ item.word }}</div>
            <div>{{ item.mening }}</div>
          </div>
        </div>
        <div>
          <div class="text-h5">{{ item.name }}</div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<style scoped lang="css">
.border {
}
.width {
  width: 1px;
}
.rounded {
  border-radius: 100px;
  padding: 10px 15px;
  color: white;
}
</style>
<script setup>
const name = [
  {
    number: "১",
    name: "الله ",
    word: "আল্লাহ",
  },
  {
    number: "২",
    name: "الرحمن ",
    word: "আর রাহমান",
    mening: "পরম দয়ালু",
  },
  {
    number: "৩",
    name: "الرحيم ",
    word: "আর-রহী'ম",
    mening: "অতিশয়-মেহেরবান",
  },
];
</script>
