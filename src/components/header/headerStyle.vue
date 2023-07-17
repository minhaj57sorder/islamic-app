<template>
  <q-page>
    <div class="flex justify-between items-center">
      <div class="row items-center">
        <div @click="alert = true">
          <q-btn flat rounded
            ><q-icon class="text-h6" name="arrow_drop_down" /> {{ date }}</q-btn
          >
        </div>
        <div @click="alert = true">
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

    <q-dialog v-model="alert" v-close-popup>
      <q-card>
        <q-card-section>
          <q-date
            v-model="date"
            mask="YYYY-MM-DD"
            minimal
            class="shadow-0"
            color="purple"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
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

const alert = ref(false);
const date = ref("07/17/2023");
</script>
