<template lang="">
  <div class="q-pa-md bg relative-position">
    <div class=""><headerStyle /></div>
    <div class="q-mt-md"><dateStyle /></div>

    <div>
      <div class="main">
        <div class="items-center flex justify-between q-py-lg">
          <div>ইশরাক ৫:৫৭ মি.</div>
          <div class="border"></div>
          <div>যুহর ১১:৫৮ মি.</div>
          <div class="border"></div>
          <div>যুহর ১১:৫৮ মি.</div>
        </div>
      </div>
    </div>

    <div class="text-h5 text-bold q-my-md">ফরজ নামাজ সমূহ</div>

    <div
      class="flex justify-between items-center q-mt-lg"
      v-for="(item, index) in salatTime"
      :key="index"
    >
      <div class="flex q-col-gutter-lg items-center">
        <div><q-icon :name="item.icon" class="text-h4" /></div>
        <div>{{ item.salat }}</div>
      </div>
      <div><q-icon :name="item.micon" /></div>
      <div>
        <div>{{ item.time }}</div>
      </div>
    </div>

    <div class="text-h5 text-bold q-mt-xl q-mb-md">নফল নামাজ সমূহ</div>

    <div
      class="flex justify-between items-center q-mt-lg"
      v-for="(item, index) in salatTime"
      :key="index"
    >
      <div class="flex q-col-gutter-lg items-center">
        <div><q-icon :name="item.icon" class="text-h4" /></div>
        <div>{{ item.salat }}</div>
      </div>
      <div><q-icon :name="item.micon" /></div>
      <div>
        <div>{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import headerStyle from "src/components/header/headerStyle.vue";
import dateStyle from "src/components/header/dateStyle.vue";

const salatTime = [
  {
    icon: "watch",
    salat: "ফজর",
    micon: "more_vert",
    time: "04-04- 05:27",
  },
  {
    icon: "watch",
    salat: "ফজর",
    micon: "more_vert",
    time: "04-04- 05:27",
  },
  {
    icon: "watch",
    salat: "ফজর",
    micon: "more_vert",
    time: "04-04- 05:27",
  },
  {
    icon: "watch",
    salat: "ফজর",
    micon: "more_vert",
    time: "04-04- 05:27",
  },
  {
    icon: "watch",
    salat: "ফজর",
    micon: "more_vert",
    time: "04-04- 05:27",
  },
];
</script>

<style scoped>
.border {
  border-right: 1px solid red;
  height: 20px;
}
</style>
