import { defineStore } from "pinia";
import { ref } from "vue";

export const useErrorDioalog = defineStore("dioalog store", () => {
  const openErrorDioalog = ref(false);

  const openDioalogManager = () => {
    openErrorDioalog.value = true;
  };
  return {
    openDioalogManager,
    openErrorDioalog,
  };
});
