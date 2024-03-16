<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="currentQuestion === 1">
      <p>Vraag 1: Hoeveel Japanse alfabetten zijn er?</p>
      <input v-model="questionAnswer">
      <button  @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 2">
      <p>Vraag 2: Wat is de 2de naam van Wynton?</p>
      <input v-model="questionAnswer">
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 3">
      <p>Gefeliciteerd, je hebt de Quiz gehaald!</p>
      <img alt="Vue logo" src="../assets/trophy.png" />
    </div>
  </div>
</template>

<script>
import { Sampler, Player } from "tone"
import A1 from "../assets/A1.mp3"
import Applause from "../assets/applause.mp3"
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      currentQuestion: 1,
      questionAnswer: '',
    };
  },
  created() {
    this.player = new Player(
    { Applause }, 
    {

      onload: () => {
        this.isLoaded = true;
      }
    })
    this.sampler = new Sampler(
      { A1 },
      {

        onload: () => {
          this.isLoaded = true;
        }
      }
    );
  },
  methods: {
    handleClick() {
      if (this.currentQuestion === 1 && this.questionAnswer === "3"){
        this.currentQuestion++;
        this.player.autostart = true;
        this.player.start(Applause);
      } else {
        this.sampler.triggerAttack("A1");
      }
      if (this.currentQuestion === 2 && this.questionAnwer == "Leander"){
        this.currentQuestion++;
        this.player.autostart = true;
        this.player.start(Applause);
      } else {
        this.sampler.triggerAttack("A1");
      }
    }
  }
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
