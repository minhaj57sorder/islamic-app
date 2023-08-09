<template>
  <q-page class="q-pa-lg bg relative-position">
    <div class="fixed-top q-pa-lg bgs">
      <div
        class="q-mb-lg text-h5 text-center q-mt-md bg-grey-4 q-pa-md text-red text-bold border"
      >
        পাঁচ ওয়াক্ত নামায এর পরে এই তাসবিহ পাঠ করতে হয়।
      </div>
      <div class="q-mt-md q-pa-md bg-grey-4 text-center border">
        ৩৩ বার ,<span class="text-green text-h5 q-ml-md">سُبْحَانَ اللّٰه</span>
      </div>
      <div class="q-mt-md q-pa-md bg-grey-4 text-center border">
        ৩৩ বার ,<span class="text-green text-h5 q-ml-md"
          >ٱلْحَمْدُ لِلَّٰه</span
        >
      </div>
      <div class="q-mt-md q-pa-md bg-grey-4 text-center border">
        ৩4 বার ,<span class="text-green text-h5 q-ml-md">الله أكبه</span>
      </div>

      <div class="flex flex-center q-mt-xl">
        <div
          class="flex flex-center text-h1 text counter"
          @click="counterStore.add"
        >
          {{ counterStore.count }}
        </div>
        <div class="flex flex-center q-col-gutter-md q-mt-lg">
          <div>
            <q-btn
              flat
              rounded
              color="white"
              class="bg-green"
              label="Add"
              @click="counterStore.add"
            />
          </div>
          <div>
            <q-btn
              flat
              rounded
              color="white"
              class="bg-green"
              label="subtruct"
              @click="counterStore.subtruct"
            />
          </div>
          <div>
            <q-btn
              flat
              rounded
              color="white"
              class="bg-green"
              label="reset"
              @click="counterStore.reset"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.counter {
  width: 250px;
  height: 250px;
  border: 10px solid red;
  border-radius: 50%;
  z-index: 5;
}
.border {
  border-radius: 20px;
}
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

import { ref } from "vue";

import { useCounterStore } from "src/stores/counter";

const counterStore = useCounterStore();
</script>
