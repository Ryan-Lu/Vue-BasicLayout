import Vue from 'vue'
import VueRouter from 'vue-router'

import BasicLayout from "../src/layouts/BasicLayout";
import UserLayout from "../src/layouts/UserLayout";
import Dashboard from './components/Dashboard'
import Monitor from './components/Monitor'
import TaskList from './components/TaskList'
import Settings from './components/Settings'
import UserSignIn from './components/SignIn'
import UserSignUp from './components/SignUp'
import NotFound from './views/404'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/app/dashboard'
    },
    {
        path: '/user',
        component: UserLayout,
        redirect: '/user/signIn',
        children: [
            {
                path: '/user/signIn',
                component: UserSignIn
            },
            { path: '/user/signUp', name: 'signUpPage', component: UserSignUp },
        ]
    },
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
    },
    {
        path: '/*',
        name: '404',
        component: NotFound
    }
]


const myRouter = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

myRouter.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})
myRouter.afterEach(() => {
    NProgress.done()
})

export  default myRouter