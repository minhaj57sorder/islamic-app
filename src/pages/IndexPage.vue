<template>
  <q-page class="q-pa-lg bg">
    <div class="height"><headerStyle /></div>
    <div><dateStyle /></div>
  </q-page>
</template>

<style scoped>
.bg {
  background-color: aliceblue;
}
.height {
  height: 50px;
}
</style>

<script setup>
import headerStyle from "src/components/header/headerStyle.vue";

import dateStyle from "src/components/header/dateStyle.vue";
</script>
