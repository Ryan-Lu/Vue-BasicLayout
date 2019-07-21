import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './components/Dashboard'
import Monitor from './components/Monitor'
import TaskList from './components/TaskList'
import Settings from './components/Settings'

Vue.use(VueRouter)

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/monitor', component: Monitor },
    { path: '/task-list', component: TaskList },
    { path: '/settings', component: Settings },
]

export default new VueRouter({
    routes // (缩写) 相当于 routes: routes
})