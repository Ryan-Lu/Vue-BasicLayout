import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //初始化状态
        userInfo: {
            avatarUrl: '',
            userName: '',
            userEmail: ''
        }
    },
    mutations: {
        // 处理状态
        updateUserInfo(state, newUserInfo) {
            this.state.userInfo = newUserInfo
        }
    },
    actions: {
        //提交改变后的状态
        updateUserInfo(context, newUserInfo) {
            context.commit('updateUserInfo', newUserInfo)
            //提交改变后的 state 的值
        }
    },
    getters: {
        //处理列表项 相当于 store 的计算属性
        getUserInfo(state) {
            return state.userInfo
        }
    }
})