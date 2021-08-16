<template>
  <div id="app">
    <NavBar/>
    <Todos />
  </div>
</template>

<script>
import Todos from './views/Todos.vue'
import NavBar from './components/Navbar.vue'
export default {
  name: 'App',
  components:{
    Todos,
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
