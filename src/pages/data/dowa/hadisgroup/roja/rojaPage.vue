<template>
  <div
    class="relative-position text-center text-h6 q-pa-md bg-green text-white"
  >
    <div @click="$router.back()" class="absolute">
      <q-icon name="arrow_back" />
    </div>
    <div>রোজা</div>
  </div>
  <div
    class="flex justify-between items-center q-pa-md"
    v-for="(item, index) in hadis"
    :key="index"
  >
    <div
      class="bg-green q-mb-md text-white flex justify-center items-center"
      style="width: 40px; height: 40px; border-radius: 50%; margin-top: 5px"
    >
      {{ item.number }}
    </div>
    <div class="text-justify">
      {{ item.hadis }}
    </div>
    <q-separator />
  </div>
</template>
<script setup>
const hadis = [
  {
    number: " ১",
    hadis:
      " নবীজি (সা.) বলেন, ‘যে ব্যক্তি কোনো ওজর বা অসুস্থতা ছাড়া রমজানের একটি রোজা পরিত্যাগ করবে— সে যদি ওই রোজার পরিবর্তে আজীবন রোজা রাখে তবু ওই এক রোজার ক্ষতিপূরণ হবে না।’ (তিরমিজি)",
  },
  {
    number: "২",
    hadis:
      "রাসুল (সা.) বলেন, ‘যে ব্যক্তি রোজাদারকে ইফতার করাবে, সে তার (রোজাদারের) অনুরূপ প্রতিদান লাভ করবে। তবে রোজাদারের প্রতিদান থেকে বিন্দুমাত্রও হ্রাস করা হবে না।’ (তিরমিজি)",
  },
  {
    number: "৩",
    hadis:
      "হযরত আনাস (রাদিয়াল্লাহু আনহু) বলেন, একবার রমযান মাস আসিলে নবী কারীম সল্লাল্লাহু আলাইহি ওয়াসাল্লাম এরশাদ ফরমাইলেন, তোমাদে নিকট একটি মাস আসিয়াছে। উহাতে একটি রাত্র আছে জাহা হাজার মাস হইতে উত্তম। যে ব্যক্তি এই রাত্র মাহ্রুম থাকিয়া গেল সে যেন সমস্ত ভালাই ও কল্যাণ হইতে মাহ্রুম থাকিয়া গেল। আর এই রাত্রির কল্যাণ হইতে কেবল ঐ ব্যক্তিই মাহ্রুম থাকে যে প্রকৃতপক্ষেই মাহ্রুম। (ইবনে মাজাহ)",
  },

  {
    number: "৪",
    hadis:
      "হযরত আব্বাস (রাদিয়াল্লাহু আনহু) হইতে বর্ণিত, ইতিকাফকারী গুনাহকে প্রতিরোধ করেন। ইতিকাফকারীকে সকল নেক আমলকারীর ন্যায় নেকী দেয়া হবে। (ইবন মাজাহ) ",
  },

];
</script>
<style scoped></style>

