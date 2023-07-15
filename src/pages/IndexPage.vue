<template>
  <q-page class="q-pa-lg bg">
    <div class="height"><headerStyle /></div>
    <div class="dateheight"><dateStyle /></div>
    <div><salatTime /></div>
  </q-page>
</template>

<style scoped>
.bg {
  background-color: aliceblue;
}
.height {
  height: 50px;
}
.dateheight {
  height: 60px;
}
</style>

<script setup>
import headerStyle from "src/components/header/headerStyle.vue";

import dateStyle from "src/components/header/dateStyle.vue";

import salatTime from "src/components/header/salatTime.vue";
</script>
