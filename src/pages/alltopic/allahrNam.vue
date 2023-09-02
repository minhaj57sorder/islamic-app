<template lang="">
  <div
    class="relative-position text-center text-h6 text-white bg-green border q-pa-md q-mb-md"
  >
    <div class="absolute" @click="$router.back()">
      <q-icon name="arrow_back" />
    </div>
    <div>আল্লাহর নাম বাংলা , অর্থসহ</div>
  </div>
  <div class="q-pa-md">
    <div>
      <q-card
        class="flex justify-between items-center no-wrap q-mb-sm q-pa-md"
        v-for="(item, index) in name"
        :key="index"
      >
        <div class="flex no-wrap q-col-gutter-md items-center">
          <div>
            <div class="bg-green-9 rounded">{{ item.number }}</div>
          </div>
          <div>
            <div class="text-body1 text-bold">{{ item.word }}</div>
            <div>{{ item.mening }}</div>
          </div>
        </div>
        <div>
          <div class="text-h6 text-right text-bold">{{ item.name }}</div>
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
// const name = [
//   {
//     number: "১",
//     name: "الله ",
//     word: "আল্লাহ",
//   },
//   {
//     number: "২",
//     name: "الرحمن ",
//     word: "আর রাহমান",
//     mening: "পরম দয়ালু",
//   },
//   {
//     number: "৩",
//     name: "الرحيم ",
//     word: "আর-রহী'ম",
//     mening: "অতিশয়-মেহেরবান",
//   },
// ];
const name = [
  {
    number: "১",
    name: "الرحمن",
    word: "আর রাহমান",
    mening: "পরম দয়ালু",
  },
  {
    number: "২",
    name: "الرحيم",
    word: "আর-রাহ়ীম",
    mening: "অতিশয়-মেহেরবান",
  },
  {
    number: "৩",
    name: "الملك",
    word: "আল-মালিক",
    mening: "সর্বকর্তৃত্বময়",
  },
  {
    number: "৪",
    name: "القدوس",
    word: "আল-কুদ্দুস",
    mening: "নিষ্কলুষ, অতি পবিত্র",
  },
  {
    number: "৫",
    name: "السلام",
    word: "আস-সালাম",
    mening: "নিরাপত্তা-দানকারী, শান্তি-দানকারী",
  },
  {
    number: "৬",
    name: "المؤمن",
    word: "আল-মু'মিন",
    mening: "নিরাপত্তা ও ঈমান দানকারী",
  },
  {
    number: "৭",
    name: "المهيمن",
    word: "আল-মুহাইমিন",
    mening: "পরিপূর্ণ রক্ষণাবেক্ষণকারী",
  },
  {
    number: "৮",
    name: "العزيز",
    word: "আল-আ'জীজ",
    mening: "পরাক্রমশালী, অপরাজেয়",
  },
  {
    number: "৯",
    name: "الجبار",
    word: "আল-জাব্বার",
    mening: "দুর্নিবার",
  },
  {
    number: "১০",
    name: "المتكبر",
    word: "আল-মুতাকাব্বিইর",
    mening: "নিরঙ্কুশ শ্রেষ্ঠত্বের অধিকারী",
  },
  {
    number: "১১",
    name: "الخالق",
    word: "আল-খালিক্ব",
    mening: "সৃষ্টিকর্তা",
  },
  {
    number: "১২",
    name: "البارئ",
    word: "আল-বারী",
    mening: "সঠিকভাবে সৃষ্টিকারী",
  },
  {
    number: "১৩",
    name: "المصور",
    word: "আল-মুছউইর",
    mening: "আকৃতি-দানকারী",
  },
  {
    number: "১৪",
    name: "الغفار",
    word: "আল-গফ্ফার",
    mening: "পরম ক্ষমাশীল",
  },
  {
    number: "১৫",
    name: "القهار",
    word: "আল-ক্বাহার",
    mening: "কঠোর",
  },
  {
    number: "১৬",
    name: "الوهاب",
    word: "আল-ওয়াহ্হাব",
    mening: "সবকিছু দানকারী",
  },
  {
    number: "১৭",
    name: "الرزاق",
    word: "আর-রজ্জাক্ব",
    mening: "রিযিকদাতা",
  },
  {
    number: "১৮",
    name: "الفتاح",
    word: "আল ফাত্তাহ",
    mening: "বিজয়দানকারী",
  },
  {
    number: "১৯",
    name: "العليم",
    word: "আল-আ'লীম",
    mening: "সর্বজ্ঞ",
  },
  {
    number: "২০",
    name: "القابض",
    word: "আল-ক্ববিদ্ব'",
    mening: "নিয়ন্ত্রণকারী, সরল পথ প্রদর্শনকারী",
  },
  {
    number: "২১",
    name: "الباسط",
    word: "আল-বাসিত",
    mening: "প্রশস্তকারী",
  },
  {
    number: "২২",
    name: "الخافض",
    word: "আল-খফিদ্বু",
    mening: "অবনতকারী (কাফির ও মুশরিকদের)",
  },
  {
    number: "২৩",
    name: "الرافع",
    word: "আর-রফীই'",
    mening: "উন্নতকারী",
  },
  {
    number: "২৪",
    name: "المعز",
    word: "আল-মুই'জ্ব",
    mening: "সম্মান-দানকারী",
  },
  {
    number: "২৫",
    name: "المذل",
    word: "আল-মুদ্বি'ল্লু",
    mening: "(অবিশ্বাসীদের) বেইজ্জতকারী",
  },
  {
    number: "২৬",
    name: "السميع",
    word: "আস্-সামি'",
    mening: "সর্বশ্রোতা",
  },
  {
    number: "২৭",
    name: "البصير",
    word: "আল-বাছীর",
    mening: "সর্ববিষয়-দর্শনকারী",
  },
  {
    number: "২৮",
    name: "الحكم",
    word: "আল-হা'কাম",
    mening: "অটল বিচারক",
  },
  {
    number: "২৯",
    name: "العدل",
    word: "আল-আ'দল",
    mening: "পরিপূর্ণ-ন্যায়বিচারক",
  },
  {
    number: "৩০",
    name: "اللطيف",
    word: "আল-লাতীফ",
    mening: "সকল-গোপন-বিষয়ে-অবগত",
  },
  {
    number: "৩১",
    name: "الخبير",
    word: "আল-খ'বীর",
    mening: "সকল ব্যাপারে জ্ঞাত",
  },
  {
    number: "৩২",
    name: "الحليم",
    word: "আল-হা'লীম",
    mening: "অত্যন্ত ধৈর্যশীল",
  },
  {
    number: "৩৩",
    name: "العظيم",
    word: "আল-আ'জীম",
    mening: "সর্বোচ্চ-মর্যাদাশীল",
  },
  {
    number: "৩৪",
    name: "الغفور",
    word: "আল-গফুর",
    mening: "পরম ক্ষমাশীল",
  },
  {
    number: "৩৫",
    name: "الشكور",
    word: "আশ্-শাকুর",
    mening: "গুনগ্রাহী",
  },
  {
    number: "৩৬",
    name: "العلي",
    word: "আল-আ'লিইউ",
    mening: "উচ্চ-মর্যাদাশীল",
  },
  {
    number: "৩৭",
    name: "الكبير",
    word: "আল-কাবিইর",
    mening: "সুমহান",
  },
  {
    number: "৩৮",
    name: "الحفيظ",
    word: "আল-হা'ফীজ",
    mening: "সংরক্ষণকারী",
  },
  {
    number: "৩৯",
    name: "المقيت",
    word: "আল-মুক্বীত",
    mening: "সকলের জীবনোপকরণ-দানকারী",
  },
  {
    number: "৪০",
    name: "الحسيب",
    word: "আল-হাসীব",
    mening: "হিসাব-গ্রহণকারী",
  },
  {
    number: "৪১",
    name: "الجليل",
    word: "আল-জালীল",
    mening: "পরম মর্যাদার অধিকারী",
  },
  {
    number: "৪২",
    name: "الكريم",
    word: "আল-কারীম",
    mening: "সুমহান দাতা",
  },
  {
    number: "৪৩",
    name: "الرقيب",
    word: "আর-রক্বীব",
    mening: "তত্ত্বাবধায়ক",
  },
  {
    number: "৪৪",
    name: "المجيب",
    word: "আল-মুজীব",
    mening: "জবাব-দানকারী, কবুলকারী",
  },
  {
    number: "৪৫",
    name: "الواسع",
    word: "আল-ওয়াসি'",
    mening: "সর্ব-ব্যাপী, সর্বত্র-বিরাজমান",
  },
  {
    number: "৪৬",
    name: "الحكيم",
    word: "আল-হাকীম",
    mening: "পরম-প্রজ্ঞাময়",
  },
  {
    number: "৪৭",
    name: "الودود",
    word: "আল-ওয়াদুদ",
    mening: "(বান্দাদের প্রতি) সদয়",
  },
  {
    number: "৪৮",
    name: "المجيد",
    word: "আল-মাজীদ",
    mening: "সকল-মর্যাদার-অধিকারী",
  },
  {
    number: "৪৯",
    name: "الباعث",
    word: "আল-বাই'ছ'",
    mening: "পুনুরুজ্জীবিতকারী",
  },
  {
    number: "৫০",
    name: "الشهيد",
    word: "আশ্-শাহীদ",
    mening: "সর্বজ্ঞ-স্বাক্ষী",
  },
  {
    number: "৫১",
    name: "الحق",
    word: "আল-হা'ক্ব",
    mening: "পরম সত্য",
  },
  {
    number: "৫২",
    name: "الوكيل",
    word: "আল-ওয়াকিল",
    mening: "পরম নির্ভরযোগ্য কর্ম-সম্পাদনকারী",
  },
  {
    number: "৫৩",
    name: "القوي",
    word: "আল-ক্বউইউ",
    mening: "পরম-শক্তির-অধিকারী",
  },
  {
    number: "৫৪",
    name: "المتين",
    word: "আল-মাতীন",
    mening: "সুদৃঢ়",
  },
  {
    number: "৫৫",
    name: "الولي",
    word: "আল-ওয়ালিইউ",
    mening: "অভিভাবক ও সাহায্যকারী",
  },
  {
    number: "৫৬",
    name: "الحميد",
    word: "আল-হা'মীদ",
    mening: "সকল প্রশংসার অধিকারী",
  },
  {
    number: "৫৭",
    name: "المحصي",
    word: "আল-মুহছী",
    mening: "সকল সৃষ্টির ব্যপারে অবগত",
  },
  {
    number: "৫৮",
    name: "المبدئ",
    word: "আল-মুব্দি'",
    mening: "প্রথমবার-সৃষ্টিকর্তা",
  },
  {
    number: "৫৯",
    name: "المعيد",
    word: "আল-মুঈ'দ",
    mening: "পুনরায়-সৃষ্টিকর্তা",
  },
  {
    number: "৬০",
    name: "المحيي",
    word: "আল-মুহ'য়ী",
    mening: "জীবন-দানকারী",
  },
  {
    number: "৬১",
    name: "المميت",
    word: "আল-মুমীত",
    mening: "মৃত্যু-দানকারী",
  },
  {
    number: "৬২",
    name: "الحي",
    word: "আল-হাইয়্যু",
    mening: "চিরঞ্জীব",
  },
  {
    number: "৬৩",
    name: "القيوم",
    word: "আল-ক্বাইয়্যুম",
    mening: "সমস্তকিছুর ধারক ও সংরক্ষণকারী",
  },
  {
    number: "৬৪",
    name: "الواجد",
    word: "আল-ওয়াজিদ",
    mening: "অফুরন্ত ভান্ডারের অধিকারী",
  },
  {
    number: "৬৫",
    name: "الماجد",
    word: "আল-মাজিদ",
    mening: "শ্রেষ্ঠত্বের অধিকারী",
  },
  {
    number: "৬৬",
    name: "الواحد",
    word: "আল-ওয়াহি'দ",
    mening: "এক ও অদ্বিতীয়",
  },
  {
    number: "৬৭",
    name: "الاحد",
    word: "আল আহাদ",
    mening: "এক",
  },
  {
    number: "৬৮",
    name: "الصمد",
    word: "আছ্-ছমাদ",
    mening: "অমুখাপেক্ষী",
  },
  {
    number: "৬৯",
    name: "القادر",
    word: "আল-ক্বদির",
    mening: "সর্বশক্তিমান",
  },
  {
    number: "৭০",
    name: "المقتدر",
    word: "আল-মুক্ব্তাদির",
    mening: "নিরঙ্কুশ-সিদ্বান্তের-অধিকারী",
  },
  {
    number: "৭১",
    name: "المقدم",
    word: "আল-মুক্বদ্দিম",
    mening: "অগ্রসারক",
  },
  {
    number: "৭২",
    name: "المؤخر",
    word: "আল-মুয়াক্খির",
    mening: "অবকাশ দানকারী",
  },
  {
    number: "৭৩",
    name: "الأول",
    word: "আল-আউয়াল",
    mening: "অনাদি",
  },
  {
    number: "৭৪",
    name: "الأخر",
    word: "আল-আখির",
    mening: "অনন্ত, সর্বশেষ",
  },
  {
    number: "৭৫",
    name: "الظاهر",
    word: "আজ-জ'হির",
    mening: "সম্পূর্নরূপে-প্রকাশিত",
  },
  {
    number: "৭৬",
    name: "الباطن",
    word: "আল-বাত্বিন",
    mening: "দৃষ্টি হতে অদৃশ্য",
  },
  {
    number: "৭৭",
    name: "الوالي",
    word: "আল-ওয়ালি",
    mening: "সমস্ত-কিছুর-অভিভাবক",
  },
  {
    number: "৭৮",
    name: "المتعالي",
    word: "আল-মুতাআ'লি",
    mening: "সৃষ্টির গুনাবলীর উর্দ্ধে",
  },
  {
    number: "৭৯",
    name: "البر",
    word: "আল-বার্",
    mening: "পরম-উপকারী, অণুগ্রহশীল",
  },
  {
    number: "৮০",
    name: "التواب",
    word: "আত্-তাওয়াব",
    mening: "তাওবার তাওফিক দানকারী এবং কবুলকারী",
  },
  {
    number: "৮১",
    name: "المنتقم",
    word: "আল-মুনতাক্বিম",
    mening: "প্রতিশোধ-গ্রহণকারী",
  },
  {
    number: "৮২",
    name: "العفو",
    word: "আল-আ'ফঊ",
    mening: "পরম-উদার",
  },
  {
    number: "৮৩",
    name: "الرؤوف",
    word: "আর-রউফ",
    mening: "পরম-স্নেহশীল",
  },
  {
    number: "৮৪",
    name: "مالك الملك",
    word: "মালিকুল-মুলক",
    mening: "সমগ্র জগতের বাদশাহ্",
  },
  {
    number: "৮৫",
    name: "ذو الجلال والإكرام",
    word: "যুল-জালালি-ওয়াল-ইকরাম",
    mening: "মহিমান্বিত ও দয়াবান সত্তা",
  },
  {
    number: "৮৬",
    name: "المقسط",
    word: "আল-মুক্ব্সিত",
    mening: "হকদারের হক-আদায়কারী",
  },
  {
    number: "৮৭",
    name: "الجامع",
    word: "আল-জামিই'",
    mening: "একত্রকারী, সমবেতকারী",
  },
  {
    number: "৮৮",
    name: "الغني",
    word: "আল-গণিই'",
    mening: "অমুখাপেক্ষী ধনী",
  },
  {
    number: "৮৯",
    name: "المغني",
    word: "আল-মুগণিই'",
    mening: "পরম-অভাবমোচনকারী",
  },
  {
    number: "৯০",
    name: "المانع",
    word: "আল-মানিই'",
    mening: "অকল্যাণরোধক",
  },
  {
    number: "৯১",
    name: "الضار",
    word: "আয্-যর",
    mening: "ক্ষতিসাধনকারী",
  },
  {
    number: "৯২",
    name: "النافع",
    word: "আন্-নাফিই'",
    mening: "কল্যাণকারী",
  },
  {
    number: "৯৩",
    name: "النور",
    word: "আন্-নূর",
    mening: "পরম-আলো",
  },
  {
    number: "৯৪",
    name: "الهادي",
    word: "আল-হাদী",
    mening: "পথ-প্রদর্শক",
  },
  {
    number: "৯৫",
    name: "البديع",
    word: "আল-বাদীই'",
    mening: "অতুলনীয়",
  },
  {
    number: "৯৬",
    name: "الباقي",
    word: "আল-বাক্বী",
    mening: "চিরস্থায়ী, অবিনশ্বর",
  },
  {
    number: "৯৭",
    name: "الوارث",
    word: "আল-ওয়ারিস'",
    mening: "উত্তরাধিকারী",
  },
  {
    number: "৯৮",
    name: "الرشيد",
    word: "আর-রাশীদ",
    mening: "সঠিক পথ-প্রদর্শক",
  },
  {
    number: "৯৯",
    name: "الصبور",
    word: "আস-সবুর",
    mening: "অত্যধিক ধৈর্যধারণকারী",
  },
];
</script>
