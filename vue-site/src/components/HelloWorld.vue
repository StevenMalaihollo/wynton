<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="currentQuestion === 1">
      <p>Vraag 1: Hoeveel Japanse alfabetten zijn er?</p>
      <button @click="currentQuestion++">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 2">
      <p>Vraag 2: Wat is de 2de naam van Wynton?</p>
      <button @click="currentQuestion++">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 3">
      <p>Gefeliciteerd je hebt de Quiz gehaal!</p>
      <img alt="Vue logo" src="../assets/trophy.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      currentQuestion: 1,
    };
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
