<template>
  <div>
    <div class="main">
      <div class="flex justify-between q-pa-sm items-center">
        <div>ইশরাক ৫:৫৭ মি.</div>
        <div class="border"></div>
        <div>যুহর ১১:৫৮ মি.</div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="aro" @click="$router.push('/salatTime')">আরো</div>
    </div>
  </div>
</template>

<style scoped>
.border {
  border-right: 1px solid rgb(5, 5, 5);
  height: 45px;
}
.main {
}
.aro {

  width: 60px;
  font-size: 12px !important;
  border-radius: 30px 20px 30px 20px;
  color: white;
  text-align: center;
  padding: 3px 3px;
  background-color: green;
}
</style>
