import { defineStore } from "pinia";
import { ref } from "vue";

export const useDialogStore = defineStore("dialog store", () => {
  const openDateDialog = ref(false);

  const openDateDialogManager = () => {
    openDateDialog.value = true;
  };
  return {
    openDateDialogManager,
    openDateDialog,
  };
});
