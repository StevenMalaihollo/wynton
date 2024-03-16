import { Sampler } from "tone";
import A1 from "./A1.mp3";
import Vue from "vue";

new Vue({
  el: "#app",
  template: `
  <div id="app">
    <button :disabled="!isLoaded" @click="handleClick">
      start
    </button>
  </div>`,
  data: {
    isLoaded: false
  },
  created() {
    this.sampler = new Sampler(
      { A1 },
      {
        onload: () => {
          this.isLoaded = true;
        }
      }
    ).toMaster();
  },
  methods: {
    handleClick() {
      this.sampler.triggerAttack("A1");
    }
  }
});
