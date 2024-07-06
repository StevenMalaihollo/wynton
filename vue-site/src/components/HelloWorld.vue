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
      <p>Vraag 2: Hoe heten de 3 Japanse alfabetten?</p>
      <br>
      <input v-model="questionAnswer2" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 3">
      <p>Vraag 3: </p>
      <br>
      <input v-model="questionAnswer3" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 4">
      <p>Vraag 4: </p>
      <br>
      <input v-model="questionAnswer4" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 100">
      <p>Gefeliciteerd je hebt de Quiz gehaald!</p>
      <img alt="Big trophy" src="@/assets/trophy.png" />
    </div>
    <div>
      <button @click="handleClick">Save</button>
      <button @click="loadButton = True && handleClick">Load</button>
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
      loadButton: false,
      questionAnswer1: "",
      questionAnswer2: "",
      questionAnswer3: "",
      questionAnswer4: "",
      questionAnswer5: "",
      questionAnswer6: "",
      questionAnswer7: "",
      questionAnswer8: "",
      questionAnswer9: "",
      questionAnswer10: "",
      questionAnswer11: "",
      questionAnswer12: "",
      questionAnswer13: "",
      questionAnswer14: "",
      questionAnswer15: "",
      questionAnswer16: "",
      questionAnswer17: "",
      questionAnswer18: "",
      questionAnswer19: "",
      questionAnswer20: "",
      
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
          return
        }
      }
      if (this.currentQuestion === 2) {
        if (this.questionAnswer2 === "Hiragana, Katakana, Kanji") {
          this.playApplause();
          this.currentQuestion++; 
          return;
        }
        else {
          this.playA1();
          return;
        }
      }
      if (this.currentQuestion === 3) {
        if (this.questionAnswer3 === "") {
          this.playApplause();
          this.currentQuestion++; 
          return;
        }
        else {
          this.playA1();
          return;
        }
      }
      if (this.currentQuestion === 1) {
        VueCookies.set("currentQuestionSave", "1")
      }
      if (this.currentQuestion === 2) {
        VueCookies.set("currentQuestionSave", "2")
      }
      if (this.currentQuestion === 3) {
        VueCookies.set("currentQuestionSave", "3")
      }
      if (this.currentQuestion === 4) {
        VueCookies.set("currentQuestionSave", "4")
      }
      if (this.currentQuestion === 5) {
        VueCookies.set("currentQuestionSave", "5")
      }
      if (this.currentQuestion === 6) {
        VueCookies.set("currentQuestionSave", "6")
      }
      if (this.currentQuestion === 7) {
        VueCookies.set("currentQuestionSave", "7")
      }
      if (this.currentQuestion === 8) {
        VueCookies.set("currentQuestionSave", "8")
      }
      if (this.currentQuestion === 9) {
        VueCookies.set("currentQuestionSave", "9")
      }
      if (this.currentQuestion === 10) {
        VueCookies.set("currentQuestionSave", "10")
      }
      if (this.currentQuestion === 11) {
        VueCookies.set("currentQuestionSave", "11")
      }
      if (this.currentQuestion === 12) {
        VueCookies.set("currentQuestionSave", "12")
      }
      if (this.currentQuestion === 13) {
        VueCookies.set("currentQuestionSave", "13")
      }
      if (this.currentQuestion === 14) {
        VueCookies.set("currentQuestionSave", "14")
      }
      if (this.currentQuestion === 15) {
        VueCookies.set("currentQuestionSave", "15")
      }
      if (this.currentQuestion === 16) {
        VueCookies.set("currentQuestionSave", "16")
      }
      if (this.currentQuestion === 17) {
        VueCookies.set("currentQuestionSave", "17")
      }
      if (this.currentQuestion === 18) {
        VueCookies.set("currentQuestionSave", "18")
      }
      if (this.currentQuestion === 19) {
        VueCookies.set("currentQuestionSave", "19")
      }
      if (this.currentQuestion === 20) {
        VueCookies.set("currentQuestionSave", "20")
      }
      if (this.currentQuestion === 21) {
        VueCookies.set("currentQuestionSave", "21")
      }
      if (this.currentQuestion === 22) {
        VueCookies.set("currentQuestionSave", "22")
      }
      if (this.currentQuestion === 23) {
        VueCookies.set("currentQuestionSave", "23")
      }
      if (this.currentQuestion === 24) {
        VueCookies.set("currentQuestionSave", "24")
      }
      if (this.loadButton === true) {
        this.currentQuestion === VueCookies.get("currentQuestionSave")
        this.loadButton === false;
      }
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
