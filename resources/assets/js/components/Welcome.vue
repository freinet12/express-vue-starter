<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      A Full-Stack project starter with Vue.js on the front-end  and Express.js on the backend.
    </p>
    <h3>Installed</h3>
    <ul>
      <li><a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a></li>
      <li><a href="http://expressjs.com/" target="_blank" rel="noopener">Express.js</a></li>
      <li><a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener">MySQL</a></li>
      <li><a href="https://sequelize.org/v5/manual/getting-started.html" target="_blank" rel="noopener">Sequelize ORM</a></li>
    </ul>
    
    <h3>Vue Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 30px 0 0;
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
