<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="currentQuestion === 1">
      <p>Vraag 1: Hoeveel Japanse alfabetten zijn er?</p>
      <br>
      <input v-model="questionAnswer1" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 2">
      <p>Vraag 2: Wat is de 2de naam van Wynton?</p>
      <br>
      <input v-model="questionAnswer2" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 3">
      <p>Vraag 3: </p>
      <br>
      <input v-model="questionAnswer1" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 100">
      <p>Gefeliciteerd je hebt de Quiz gehaald!</p>
      <img alt="Big trophy" src="@/assets/trophy.png" />
    </div>
    <div>
      <button @click="handleClick">Save</button>
      <button @click="loadButton = 1 && handleClick">Load</button>
    </div>
  </div>
</template>

<script>
import { useSound } from "@vueuse/sound";
import A1 from "@/assets/A1.mp3";
import Applause from "@/assets/applause.mp3";
import VueCookies from "vue-cookies"
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      currentQuestion: 1,
      saveButton: 1,
      loadButton: 0,
      questionAnswer1: "",
      questionAnswer2: "",
      questionAnswer3: "",
      
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
          this.saveButton++;
          this.currentQuestion++; 
          return;
        }
        else {
          this.playA1();
        }
      }
      if (this.currentQuestion === 2) {
        if (this.questionAnswer2 === "Hiragana, Katakana, Kanji") {
          this.playApplause();
          this.saveButton++;
          this.currentQuestion++; 
          return;
        }
        else {
          this.playA1();
        }
      }
      if (this.saveButton === 1) {
        VueCookies.set("currentQuestion", "1")
      }
      if (this.saveButton === 2) {
        VueCookies.set("currentQuestion", "2")
      }
      if (this.saveButton === 3) {
        VueCookies.set("currentQuestion", "3")
      }
      if (this.loadButon === 1)
      VueCookies.get("currentQuestion")
    }
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
