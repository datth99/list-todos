<template>
  <div class="navbar">
      <h1>My Vuex App Todos</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li v-if="auth.isAuth" @click="TOGGE_AUTH">TotalTodos: {{todos.length}}
          <button>Logout</button>
        </li>
        <button v-else @click="TOGGE_AUTH">
          Login
        </button>
      </ul>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
  name: 'NavBar',
  computed: mapState(['todos', 'auth']), // lay du lieu tu state
  methods: mapMutations(['TOGGE_AUTH']) // chuyen doi trang thai cho isAuth
}
</script>

<style>
.navbar {
 padding: 5px;
 text-align: center;
 background: rgb(240, 240, 240);
 color: black;
}

.navbar ul {
 display: flex;
 justify-content: space-around;
 align-items: center;
 list-style: none;
 padding: 0;
}
</style>