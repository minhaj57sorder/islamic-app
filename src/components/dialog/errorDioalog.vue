<template>
  <q-dialog v-model="errorDioalog.openErrorDioalog" v-close-popup>
    <q-card>
      <q-card-section>
        <div>Hello</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from "vue";

import { useErrorDioalog } from "src/stores/errorDioalog";

const errorDioalog = useErrorDioalog();
</script>
