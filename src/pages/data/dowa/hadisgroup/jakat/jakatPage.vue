<template>
  <div
    class="relative-position text-center text-h6 q-pa-md bg-green text-white"
  >
    <div @click="$router.back()" class="absolute">
      <q-icon name="arrow_back" />
    </div>
    <div>যিকির</div>
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
      " আবু হুরায়রা (রা.) থেকে বর্ণিত হাদিসে রাসুল (সা.) বলেন, দুটি বাক্য এমন রয়েছে, যা বলা সহজ, আমলের পাল্লায় অনেক ভারী। আর আল্লাহর কাছেও অধিক পছন্দনীয়। সেটি হলো, سبحان الله وبحمده سبحان الله العظيم (সুবহানাল্লাহি ওয়া বিহামদিহি, সুবহানাল্লাহিল আজিম)। (বুখারী)",
  },
  {
    number: "২",
    hadis:
      " নবী কারীম সল্লাল্লাহু আলাইহি ওয়াসাল্লাম ফরমাইয়াছেন, আল্লাহর যিকির হইতে বড় মানুষের আর কোন আমল কবরের আজাব হইতে অধিক নাজাত দানকারী নাই। (আহমদ, দূররে মানসূর)",
  },
  {
    number: "৩",
    hadis:
      "রাসুলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম এরশাদ ফরমাইয়াছেন, আল্লাহর জিকির এত বেশী করিতে থাক যে, লোকেরা পাগল বলে। (আহমদ, ইবনে হিব্বান)",
  },

  {
    number: "৪",
    hadis:
      " হাদিসে কুদসিতে আল্লাহতায়ালা বলেন, যে ব্যক্তি আল্লাহর জিকির করে এবং যে আল্লাহর জিকির করে না তাদের দৃষ্টান্ত হলো জীবিত ও মৃতদের মতো। (বুখারী, মুসলিম)",
  },

];
</script>
<style scoped></style>
