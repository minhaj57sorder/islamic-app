<template>
  <q-page>
    <div class="flex justify-between items-center">
      <div class="row items-center" style="margin-left: -15px">
        <div @click="dioalogStore.openDateDialogManager">
          <q-btn flat rounded
            ><q-icon class="text-h6" name="arrow_drop_down" />
            {{ formattedString }}</q-btn
          >
        </div>
        <div @click="errorDioalog.openDioalogManager">
          <q-btn flat rounded size="15px" class="icon"
            ><q-icon name="error"
          /></q-btn>
        </div>
      </div>

      <!--Dhaka Section-->
      <div class="flex items-center">
        <q-btn class="dhaka" rounded @click="alert = true"
          >ঢাকা. <q-icon name="arrow_drop_down"
        /></q-btn>
        <q-btn flat rounded size="15px" class="text-h5"
          ><q-icon name="person"
        /></q-btn>
      </div>
    </div>
    <dateDialog />
    <errorioalog />
  </q-page>
</template>

<style scoped>
.dhaka {
  background-color: green;
  padding: 5px 15px;
  border-radius: 20px;
  color: white;
}
.icon {
  margin-top: px;
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
