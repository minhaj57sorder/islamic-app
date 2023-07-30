<template>
  <q-dialog v-model="dioalogStore.openDateDialog" v-close-popup>
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
</template>

<script setup>
import { ref } from "vue";

import { useDialogStore } from "src/stores/dateDialog";

const dioalogStore = useDialogStore();
</script>

<style scoped></style>
