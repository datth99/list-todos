<template>
  <div class="list-todos">
      <ul>
          <li><b>DONE</b></li>
          <li class="status-bar" v-for="todo in doneTodos" :key="todo.id">{{todo.title}}</li>
      </ul>
  </div>
</template>

<script>

export default {
    name: 'StatusBar',
    computed: {
        doneTodos(){
            return this.$store.state.todos.filter(todo => todo.completed) // loc ra trang thai todo DONE!
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