<template>
  <div class="list-todos">
      <ul>
          <li style="background-color: white"><b>DONE</b></li>
          <li style="background-color: red; color: yellow;" class="status-bar" v-for="todo in doneTodos" :key="todo.id">{{todo.title}}</li>
      </ul>
  </div>
</template>

<script>

export default {
    name: 'StatusBar',
    computed: {
        doneTodos(){
            return this.$store.getters.doneTodos;
        }
    }
}
</script>

<style>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>