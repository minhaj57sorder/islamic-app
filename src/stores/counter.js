import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter store", () => {
  const count = ref(1);
  const add = () => {
    count.value = count.value + 1;
  };
  const subtruct = () => {
    if (count.value <= 0) {
      return;
    }
    count.value = count.value - 1;
  };
  return {
    add,
    subtruct,
    count,
  };
});