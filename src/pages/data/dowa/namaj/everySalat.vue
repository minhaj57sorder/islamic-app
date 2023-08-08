<template>
  <div
    class="relative-position q-pa-lg items-center bg-green q-mb-md text-white"
  >
    <div class="absolute text-h6">
      <q-icon class="" name="arrow_back" @click="$router.back()" />
    </div>
    <div class="text-h6 text-center">প্রত্তেক নামাজ এর পরের দুয়া</div>
  </div>

  <div class="q-pa-md" v-for="(item, index) in dowa" :key="index">
    <div class="q-mb-md q-mt-xs relative-position">
      <div
        class="bg-green text-white text-bold q-py-sm q-px-md absolute"
        style="border-radius: 50%; margin-top: -3px"
      >
        {{ item.number }}
      </div>
      <div class="text-h6 text-center text-bold">{{ item.title }}</div>
    </div>

    <div class="q-mb-md text-justify">
      {{ item.hadis }}
    </div>
    <div class="text-h5 text-bold text-center q-mt-lg">
      {{ item.arbi }}
    </div>
    <p class="text-justify">
      {{ item.pronun }}
    </p>
    <div class="text-justify">{{ item.dowa }}</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const dowa = [
  {
    number: "১",
    title: "হাদিস শরিফে বর্ণিত আছে যে",
    hadis:
      " বিশ্বনবী হজরত মুহাম্মদ (স.) একদিন তাঁর প্রিয় সাহাবী হজরত মুআজ বিন জাবাল  (রা.)-এর হাত ধরে বললেন, ‘মুআজ! আল্লাহর কসম, আমি তোমাকে ভালোবাসি।’ মুআজ (রা.) তৎক্ষণাৎ উত্তর দিলেন, ‘আমার মা-বাবা আপনার জন্য উৎসর্গিত হোক! আল্লাহর কসম, আমিও আপনাকে ভালোবাসি।’ অতঃপর রাসুলুল্লাহ (স.) বললেন, মুআজ! আমি তোমাকে বলছি, কখনোই নামাজের পরে এ দোয়া পড়তে ভুল করো না।’ (মুসনাদে আহমদ: ২২১১৯; সুনানে আবু দাউদ: ১৫২৪) ",
    arbi: " اللّهُمَّ أَعِنِّيْ عَلٰى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    pronun:
      "উচ্চারণ: ‘আল্লাহুম্মা আ-ইন্নি আলা জিকরিকা ওয়া শুকরিকা ওয়া হুসনি ইবাদাতিক’",
    dowa: "অর্থ: ‘হে আল্লাহ! আপনার জিকির, আপনার কৃতজ্ঞতা ও শোকর আদায় এবং সুন্দর করে আপনার ইবাদত করতে আপনি আমাকে সাহায্য করুন।’",
  },
  {
    number: "২",
    title: "হাদিস শরিফে বর্ণিত আছে যে",
    hadis: "",
    arbii: "",
    pronun: "",
    dowa: "",
  },
];
</script>
<style></style>
