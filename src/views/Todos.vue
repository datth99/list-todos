<template>
<div>
    <div class="todo-list" v-if="auth.isAuth">
      <TodoForm />
      <ul>
          <li v-for="todo in todos" :key="todo.id" :class="todo.completed ? 'completed' : '' ">
              {{todo.title}}
              <input type="checkbox" :checked="todo.completed" @change="markTodoCompleted(todo.id)">
              <button @click="deleteTodos(todo.id)">Delete</button>
          </li>
      </ul>
      <StatusBar />
      <ProcessBar />
  </div>
  <p v-else> Please, you enter login</p>
 
</div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'

import StatusBar from '../components/StatusBar.vue'
import ProcessBar from '../components/ProcessBar.vue'
import TodoForm from '../components/FormTodo.vue'

export default {
    name: 'Todos',
    computed: mapState(['todos', 'auth']),
    components:{
        StatusBar,
        ProcessBar,
        TodoForm,
    },
    created(){
        this.getTodos()
    },
    methods: { 
        ...mapActions(['deleteTodos', 'getTodos']),

        markTodoCompleted(todoId){
            return this.$store.commit('MARK_COMPLETE', todoId) // chuyen doi trang thai isAuth
        },
       
    }
}
</script>

<style>
.todo-list ul {
 padding: 0 10px 10px 10px;
 list-style-type: none;
}

.todo-list li {
 padding: 10px;
 cursor: pointer;
 margin: 10px 0;
 border-radius: 4px;
 background: rgb(240, 240, 240);
 color: black;
}

.todo-list li input[type='checkbox'] {
 -ms-transform: scale(2); /* IE */
 -moz-transform: scale(2); /* FF */
 -webkit-transform: scale(2); /* Safari and Chrome */
 -o-transform: scale(2); /* Opera */
 transform: scale(2);
 padding: 10px;
 float: right;
}

.todo-list li button {
 float: right;
 margin-right: 20px;
}

.todo-list li button:hover {
 cursor: pointer;
 background: red;
 color: white;
}

.todo-list li.completed {
 background: rgb(236, 122, 28);
 color: rgb(250, 250, 250);
}
p{
    text-align: center;
    font-size: 16px;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    font-weight: 600;
}
</style>