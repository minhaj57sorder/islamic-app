import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { ref } from "vue";

export const useCounterStore = defineStore("counter store", () => {
  const count = ref(0);
  const hadithList = ref(null);
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
    if ((count.value = 0)) {
      return;
    }
  };
  const getHadith = async () => {
    const config = {
      method: 'get',
      url: '/api/hadiths',
      headers: {
        "Authorization": "Bearer token",
        "Content-Type": "application/json"
      }
    }
    try {
      let response = await api.request(config)
      hadithList.value = response.data
    } catch (error) {
      console.log(error)
    }
  }
  return {
    add,
    subtruct,
    reset,
    count,
  };
});

// import { defineStore } from "pinia";
// import { ref } from "vue";
// export const useCounterStore = defineStore("counter store", () => {
// const count = ref(0);
// });
