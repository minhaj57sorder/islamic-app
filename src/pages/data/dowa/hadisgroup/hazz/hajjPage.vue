<template>
  <div
    class="relative-position text-center text-h6 q-pa-md bg-green text-white"
  >
    <div @click="$router.back()" class="absolute">
      <q-icon name="arrow_back" />
    </div>
    <div>কুরআন</div>
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
      " হযরত উসমান (রাদিয়াল্লাহু আনহু) হইতে বর্ণিত, নবী কারীম সল্লাল্লাহু আলাইহি ওয়াসাল্লাম এরশাদ ফরমাইয়াছেন, তোমাদের মধ্যে ঐ ব্যক্তি সর্বোত্তম যে নিজে কুরআন মাজিদ শিখে ও অপরকে শিক্ষা দেয়। (বুখারী, আবূ দাউদ, তিরমিযী)",
  },
  {
    number: "২",
    hadis:
      "হজরত আবু হুরায়রা রাদিয়াল্লাহু আনহু বর্ণনা করেন, রাসুলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম বলেছেন, কুরআন মাজিদে ৩০ (ত্রিশ) আয়াত বিশিষ্ট একটি সুরা রয়েছে, যা তার তেলাওয়াতকারীকে ক্ষমা করে দেয়ার আগ পর্যন্ত তার জন্য সুপারিশ করতেই থাকবে। আর সুরাটি হলো تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ অর্থাৎ সুরা মুলক।’ (মুসনাদে আহমদ, তিরমিজি, আবু দাউদ, ইবনে মাজাহ)",
  },
  {
    number: "৩",
    hadis:
      "হযরত আবূ যর (রাদিয়াল্লাহু আনহু) বলেন, নবী কারীম সল্লাল্লাহু আলাইহি ওয়াসাল্লাম  এরশাদ ফরমাইয়াছেন, হে আবূ যর! তুমি যদি সকাল বেলা গিয়ে কালামুল্লাহ শরীফের একটি আয়াত শিক্ষা কর তবে উহা একশত রাকাত নফল নামায হইতে উত্তম। আর যদি এলেমের একটি অধ্যায় শিক্ষা কর, চাই উহার উপর আমল করা হউক বা না হউক তবে উহা হাজার রাকাত নফল নামায হইতে উত্তম। (ইবনে মাজাহ)",
  },

  {
    number: "৪",
    hadis:
      "হযরত আবূ হুরাইরা (রাদিয়াল্লাহু আনহু) হইতে বর্ণিত, হুজুর সল্লাল্লাহু আলাইহি ওয়াসাল্লাম  এরশাদ করিয়াছেন, আল্লাহ তায়ালা কাহারও প্রতি এত মনোযোগ দেন না যত মনোযোগের সহিত ঐ নবীর আওয়াজকে শুনেন যিনি সুমিষ্ট স্বরে আল্লাহর কালাম পাঠ করেন। (বুখারী, মুসলিম)",
  },

];
</script>
<style scoped></style>


