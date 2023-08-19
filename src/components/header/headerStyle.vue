<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="row items-center">
        <div @click="dioalogStore.openDateDialogManager">
          <q-btn flat rounded size="10px" class="icon"
            ><q-icon class="text-h6" name="arrow_drop_down" />
            {{ formattedString }}</q-btn
          >
        </div>
        <div @click="errorDioalog.openDioalogManager">
          <q-btn flat rounded size="10px" class="icon"
            ><q-icon name="error"
          /></q-btn>
        </div>
      </div>

      <!--Dhaka Section-->
      <div class="flex items-center">
        <q-btn class="dhaka" size="10px" @click="alert = true"
          >ঢাকা. <q-icon name="arrow_drop_down"
        /></q-btn>
        <q-btn flat rounded size="10px" class="icon"
          ><q-icon name="person"
        /></q-btn>
      </div>
    </div>
    <dateDialog />
    <errorioalog />
  </div>
</template>

<style scoped>
.icon {
  background-color: green;
  padding: 0px 10px 0px 10px;
  border-radius: 30px 20px 30px 20px;
  color: white;
  margin-left: 2px;
}
.dhaka {
  background-color: green;
  padding: 0px 2px 0px 10px;
  border-radius: 10px;
  color: white;
  font-size: 10px !important;
}
</style>

<script setup>
import { ref } from "vue";
import { date } from "quasar";
import { useDialogStore } from "src/stores/dateDialog";
scrollX;
import dateDialog from "../dialog/dateDialog.vue";
import { useErrorDioalog } from "src/stores/errorDioalog";
import errorioalog from "src/components/dialog/errorDioalog.vue";

const errorDioalog = useErrorDioalog();
const dioalogStore = useDialogStore();
const timeStamp = Date.now();
const formattedString = date.formatDate(timeStamp, "MMM DD YY");
</script>
