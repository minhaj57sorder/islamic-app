1. salah time
2. story of sahaba
3. important hadith
4. important dua
5. ibadah time.
6. tasbih
7. 99 allah name

main- fixed-top style="z-index: 10000"

import headerStyle from "src/components/header/headerStyle.vue";

import dateStyle from "src/components/header/dateStyle.vue";

{ import or export funtion
import { ref } from "vue";
import { useCounterStore } from "src/store/counter";

const counterStore = useCounterStore();
}

{ counter funtion

<div>counter: {{ counterStore.count }}</div>
<q-btn label="Add" @click="counterStore.add" />
<q-btn label="Subtract" @click="counterStore.subtruct" />
}

<!--import or export system for Store -->

[
  1st Rules:{
  create a js file in Store Folder
  }

  2nd{
  import {defineStore} from "pinia";
  import { ref } from "vue";
  }
  3rd {
  (variable create kora)

  export const useCounterStore = defineStore("counter Store", () => {
  const count = ref (1);

  });
  }
  4th{
  arry funtion

  const add = () => {
  count.value = count.value +1;
  };
  }

  5th{
  return{
  value name
  }
}

]
