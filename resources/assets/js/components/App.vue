<template>
  <div class="wrapper">
    <img alt="Vue logo" src="images/express-vue.png">
    <Welcome msg="Welcome to Your Vue.js + Express App"/>
  </div>
</template>

<script>
import Welcome from '../components/Welcome.vue'

export default {
  name: 'app',
  components: {
    Welcome
  }
}
</script>

<style>
.wrapper{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
