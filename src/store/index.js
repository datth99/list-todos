import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [

        ],
        auth: {
            isAuth: false
        }
    },
    mutations: {
        TOGGE_AUTH(state) {
            state.auth.isAuth = !state.auth.isAuth
        },
        MARK_COMPLETE(state, todoId) {
            state.todos.map(todo => {
                if (todo.id === todoId) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        },
        ADD_TODO(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        SET_TODOS(state, todos) {
            state.todos = todos
        }
    },
    actions: {
        async deleteTodos({ commit }, todoId) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
                commit('DELETE_TODO', todoId)
            } catch (error) {
                console.log(error)
            }
        },
        async addTodo({ commit }, newTodo) {
            try {
                await axios.post('https://jsonplaceholder.typicode.com/todos/', newTodo)
                commit('ADD_TODO', newTodo)
            } catch (error) {
                console.log(error)
            }
        },
        async getTodos({ commit }) {
            try {
                const todos = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
                commit('SET_TODOS', todos.data)
            } catch (error) {
                console.log(error)
            }

        }
    },
    modules: {

    }
})