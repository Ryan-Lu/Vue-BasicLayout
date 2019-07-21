import Vue from 'vue'
import VueRouter from 'vue-router'

import BasicLayout from "../src/layouts/BasicLayout";
import Dashboard from './components/Dashboard'
import Monitor from './components/Monitor'
import TaskList from './components/TaskList'
import Settings from './components/Settings'

Vue.use(VueRouter)

const routes = [
    {
        path: '/app',
        component: BasicLayout,
        redirect: '/app/dashboard',
        children: [
            {
                path: '/app/dashboard',
                component: Dashboard
            },
            { path: '/app/monitor', component: Monitor },
            { path: '/app/task-list', component: TaskList },
            { path: '/app/settings', component: Settings },
        ]
    }
]


export default new VueRouter({
    routes // (缩写) 相当于 routes: routes
})