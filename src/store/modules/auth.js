const state = {
    auth: {
        isAuth: false
    }
}

const getters = {
    checkAuth: state => state.auth.isAuth
}

const actions = {

}

const mutations = {
    TOGGE_AUTH(state) {
        state.auth.isAuth = !state.auth.isAuth
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}