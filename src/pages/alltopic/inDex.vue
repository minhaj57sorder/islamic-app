<template>
  <q-page class="q-pa-lg bg relative-position">
    <div class="fixed-top q-pa-lg bgs">
      <div class="height"><headerStyle /></div>
      <div class="dateheight"><dateStyle /></div>
    </div>
  </q-page>
</template>

<style scoped>
.bg {
  background-color: aliceblue;
}
.bgs {
  background-color: aliceblue;
  height: 130px;
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
</script>
