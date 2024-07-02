<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="currentQuestion === 1">
      <p>Vraag 1: Hoeveel Japanse alfabetten zijn er?</p>
      <input v-model="questionAnswer1" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 2">
      <p>Vraag 2: Wat is de 2de naam van Wynton?</p>
      <input v-model="questionAnswer2" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 3">
      <p>Gefeliciteerd je hebt de Quiz gehaald!</p>
      <img alt="Vue logo" src="@/assets/trophy.png" />
    </div>
  </div>
</template>

<script>
import { useSound } from "@vueuse/sound";
import A1 from "@/assets/A1.mp3";
import Applause from "@/assets/applause.mp3";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      currentQuestion: 1,
      questionAnswer1: "",
      questionAnswer2: "",
    };
  },
  setup() {
    const { play: playA1 } = useSound(A1);
    const { play: playApplause } = useSound(Applause);

    return {
      playA1,
      playApplause,
    };
  },
  methods: {
    handleClick() {
      if (this.currentQuestion === 1) {
        if (this.questionAnswer1 === "3") {
          this.playApplause();
          this.currentQuestion++; 
          return;
        }
        else {
          this.playA1();
        }
      }
      if (this.currentQuestion === 2) {
        if (this.questionAnswer2 === "Leander") {
          this.playApplause();
          this.currentQuestion++; 
          return;
        }
        else {
          this.playA1();
        }
      }
      
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
