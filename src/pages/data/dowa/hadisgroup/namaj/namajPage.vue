<template>
  <div
    class="relative-position text-center text-h6 q-pa-md bg-green text-white"
  >
    <div @click="$router.back()" class="absolute">
      <q-icon name="arrow_back" />
    </div>
    <div>নামায</div>
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
      " হযরত হুজাইফাহ (রাদিয়াল্লাহু আনহু) বলেন, নবী কারীম সল্লাল্লাহু আলাইহি ওয়াসাল্লাম যখন কোন কঠিন সমস্যার সম্মুখীন হইতেন, তৎক্ষণাৎ তিনি নামাযে মনোনিবেশ করিতেন। (আবূ দাউদ)",
  },
  {
    number: "২",
    hadis:
      "নবী কারীম সল্লাল্লাহু আলাইহি ওয়াসাল্লাম ফরমাইয়াছেন, জামাতের নামায একা নামায হইতে সাতাইশ গুন বেশী মর্তবা রাখে। (বুখারী, মুসলিম)",
  },
  {
    number: "৩",
    hadis:
      "নবী কারীম সল্লাল্লাহু আলাইহি ওয়াসাল্লাম ফরমাইয়াছেন, যে ব্যক্তি উত্তমরূপে ওযু করিয়া নামায পড়িবার জন্য মসজিদে গমন করে এবং সেখানে গিয়া দেখে যে, জামাত শেষ হইয়া গিয়াছে, তবুও সে জামাতে নামাজের সওয়াব পাইবে এবং এই সওয়াবের জাহারা জামাতের সহিত নামায আদায় করিয়াছেন তাহাদের নামাযের সওয়াবের মধ্যে কোন প্রকার কম করা হইবে না। (আবূ দাউদ, নাসাঈ)",
  },

  {
    number: "৪",
    hadis:
      " নবী কারীম সল্লাল্লাহু আলাইহি ওয়াসাল্লাম ফরমাইয়াছেন, ঐ নামায উত্তম, যাহাতে রাকাতসমূহ দীর্ঘ হয়। (মুসলিম)",
  },

];
</script>
<style scoped></style>
