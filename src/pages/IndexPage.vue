<template>
  <q-page class="q-pa-md bgs relative-position">
    <div class="fixed-top q-pa-md">
      <div class="height"><headerStyle /></div>
      <div class="dateheight"><dateStyle /></div>
    </div>
    <div class="prefix">
      <div><salatTime /></div>
      <div class="q-mt-md"><hadisStyle /></div>

      <div class="q-mt-md"><allTopic /></div>
    </div>
  </q-page>
</template>

<style scoped>
.bg {
  background-color: aliceblue;
}
.bgs {
  background-color: aliceblue;
}
.height {
  height: 50px;
}
.dateheight {
  height: 60px;
}
.prefix {
  margin-top: 100px;
}
</style>

<script setup>
import headerStyle from "src/components/header/headerStyle.vue";

import dateStyle from "src/components/header/dateStyle.vue";

import salatTime from "src/components/header/salatTime.vue";

import hadisStyle from "src/components/header/hadisStyle.vue";

import allTopic from "src/components/topic/allTopic.vue";
</script>
