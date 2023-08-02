import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter store", () => {
  const count = ref(0);
  const add = () => {
    count.value = count.value + 1;
  };
  const subtruct = () => {
    if (count.value <= 0) {
      return;
    }
    count.value = count.value - 1;
  };
  const reset = () => {
    if (count.value = 0){
      return;
    }
  };
  return {
    add,
    subtruct,
    reset,
    count,
  };
});
