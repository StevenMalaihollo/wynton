<script setup>
import { reactive } from 'vue';
import { ref } from "vue";
const loadSavebuttonReactive = reactive({ loadSaveButton: "" });
const currentQuestionReactive = reactive({ currentQuestion: 1 });
const questionAnswer1 = ref(1);
</script>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="currentQuestionReactive.currentQuestion === 1">
      <p>Vraag 1: Hoeveel Japanse alfabetten zijn er?</p>
      <br>
      <input v-model="questionAnswer1" type="number" min="1" max="5" class="sliderInputBox" />
      <br>
      <input v-model="questionAnswer1" type="range" min="1" max="5" class="slider" />
      <br>
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestionReactive.currentQuestion === 2">
      <p>Vraag 2: Hoe heten de 3 Japanse alfabetten?</p>
      <a href = "https://nl.wikipedia.org/wiki/Japans_schrift">Hint</a>
      <br>
      <input v-model="questionAnswer2" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestionReactive.currentQuestion === 3">
      <p>Vraag 3: Hoe heet dit karakter?</p>
      <img alt="A Hiragana" src="@/assets/A-Hiragana.png" />
      <br>
      <a href="https://nl.wikipedia.org/wiki/Hiragana#Hepburn-romanisatie_van_het_hiragana-schrift">Hint</a>
      <br>
      <input v-model="questionAnswer3" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestionReactive.currentQuestion === 4">
      <p>Vraag 4: </p>
      <br>
      <input v-model="questionAnswer4" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestionReactive.currentQuestion === 5">
      <p>Gefeliciteerd je hebt de Quiz gehaald!</p>
      <img alt="Big trophy" src="@/assets/trophy.png" />
    </div>
    <div v-if="loadSaveButton === true">
      <button @click="handleClick">Save</button>
      <button @click="loadSavebuttonReactive.loadSaveButton = true && handleClick">Load</button>
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
      currentQuestionReactive: 1,
      loadButton: false,
      loadSaveButton: true,
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
      if (this.currentQuestionReactive === 1) {
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
      if (this.currentQuestionReactive === 2) {
        if (this.questionAnswer2 === "Hiragana, Katakana, Kanji") {
          this.playApplause();
          this.currentQuestion++; 
          return;
        }
        else {
          if (this.questionAnswer2 === "Kanji, Hiragana, Katakana") {
            this.playApplause();
            this.currentQuestion++; 
            return;
          }
          else {
            this.playA1();
            return;
          }
        }
      }
      if (this.currentQuestionReactive === 3) {
        if (this.questionAnswer3 === "a") {
          this.playApplause();
          this.currentQuestion++; 
          return;
        }
        else {
          this.playA1();
          return;
        }
      }
      if (this.currentQuestionReactive === 4) {
        if (this.questionAnswer4 === "vraag 4") {
          this.playApplause();
          this.saveButton++;
          this.currentQuestion++; 
          return;
        }
        else {
          this.playA1();
          return;
        }
      }
      if (this.currentQuestionReactive === 5) {
        this.loadSaveButton === false
      }
      if (this.currentQuestionReactive === 1) {
        VueCookies.set("currentQuestionSave", "1")
      }
      if (this.currentQuestionReactive === 2) {
        VueCookies.set("currentQuestionSave", "2")
      }
      if (this.currentQuestionReactive === 3) {
        VueCookies.set("currentQuestionSave", "3")
      }
      if (this.currentQuestionReactive === 4) {
        VueCookies.set("currentQuestionSave", "4")
      }
      if (this.currentQuestionReactive === 5) {
        VueCookies.set("currentQuestionSave", "5")
      }
      if (this.currentQuestionReactive === 6) {
        VueCookies.set("currentQuestionSave", "6")
      }
      if (this.currentQuestionReactive === 7) {
        VueCookies.set("currentQuestionSave", "7")
      }
      if (this.currentQuestionReactive === 8) {
        VueCookies.set("currentQuestionSave", "8")
      }
      if (this.currentQuestionReactive === 9) {
        VueCookies.set("currentQuestionSave", "9")
      }
      if (this.currentQuestionReactive === 10) {
        VueCookies.set("currentQuestionSave", "10")
      }
      if (this.currentQuestionReactive === 11) {
        VueCookies.set("currentQuestionSave", "11")
      }
      if (this.currentQuestionReactive === 12) {
        VueCookies.set("currentQuestionSave", "12")
      }
      if (this.currentQuestionReactive === 13) {
        VueCookies.set("currentQuestionSave", "13")
      }
      if (this.currentQuestionReactive === 14) {
        VueCookies.set("currentQuestionSave", "14")
      }
      if (this.currentQuestionReactive === 15) {
        VueCookies.set("currentQuestionSave", "15")
      }
      if (this.currentQuestionReactive === 16) {
        VueCookies.set("currentQuestionSave", "16")
      }
      if (this.currentQuestionReactive === 17) {
        VueCookies.set("currentQuestionSave", "17")
      }
      if (this.currentQuestionReactive === 18) {
        VueCookies.set("currentQuestionSave", "18")
      }
      if (this.currentQuestionReactive === 19) {
        VueCookies.set("currentQuestionSave", "19")
      }
      if (this.currentQuestionReactive === 20) {
        VueCookies.set("currentQuestionSave", "20")
      }
      if (this.currentQuestionReactive === 21) {
        VueCookies.set("currentQuestionSave", "21")
      }
      if (this.currentQuestionReactive === 22) {
        VueCookies.set("currentQuestionSave", "22")
      }
      if (this.currentQuestionReactive === 23) {
        VueCookies.set("currentQuestionSave", "23")
      }
      if (this.currentQuestionReactive === 24) {
        VueCookies.set("currentQuestionSave", "24")
      }
      if (this.loadButton === true) {
        this.currentQuestionReactive.currentQuestion = VueCookies.get("currentQuestionSave")
        this.loadButton = false;
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
