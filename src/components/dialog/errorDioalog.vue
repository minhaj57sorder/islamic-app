<template>
  <q-dialog v-model="errorDioalog.openErrorDioalog" v-close-popup>
    <q-card
      class="q-pa-md bg-green-2 flex flex-center"
      style="
        width: 300px;
        height: 400px;
        border-radius: 30px;
        box-shadow: 5px 5px 100px 10px rgb(187, 231, 204);
        border: 1px solid red;
      "
    >
      <q-card-section>
        <div
          class="bg-green-3 q-py-sm q-mb-lg"
          style="border-radius: 25px; color: rgb(14, 29, 80)"
        >
          <div class="text-h6 text-center text-bold">Please Subscribe</div>
        </div>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-col-gutter-md justify-around"
        >
          <q-input
            standout="bg-green-4
             text-white
             text-center"
            dense
            color="black"
            bg-color="black-3"
            autofocus
            label="Your First Name "
            v-model="firstName"
          />
          <q-input
            standout="bg-green-4
             text-white
             "
            dense
            label="Your Last Name "
            v-model="lastName"
          />
          <q-input
            standout="bg-green-4
             text-white
             "
            dense
            suffix="@gmail.com"
            label="Inter Your Email"
            type="email"
            v-model="email"
          />
          <div class="flex justify-center items-center bg-col">
            <q-btn
              no-caps
              push
              class="q-px-sm"
              dense
              color="green-4"
              text-color="white"
              label="Submit "
              v-model="submit"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from "vue";

import { useErrorDioalog } from "src/stores/errorDioalog";

const errorDioalog = useErrorDioalog();
const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const submit = ref(null);
</script>
