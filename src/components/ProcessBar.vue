<template>
  <p class="progress-bar">
      ProcessBar: {{proccess}} %
  </p>
</template>

<script>
export default {
  name: 'ProcessBar',
  computed: {
      proccess(){
          return Math.round(this.$store.state.todos.filter(todo => todo.completed).length / this.$store.state.todos.length * 100)
      }
  }
}
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(140, 0, 255);
  color: rgb(255, 255, 255);
}
</style>