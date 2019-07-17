import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {
            username: '',
            avatarUrl: ''
        },
    },
    mutations: {
        updateUserInfo(state, newUserInfo) {
            this.state.userInfo = newUserInfo
        }
    },
    actions: {
        updateUserInfo (context, newUserInfo) {
            context.commit('updateUserInfo', newUserInfo)
        }
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo
        }
    }
})
