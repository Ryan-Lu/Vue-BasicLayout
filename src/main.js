import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard'
import Monitor from './components/Monitor'
import TaskList from './components/TaskList'
import Settings from './components/Settings'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/monitor', component: Monitor },
  { path: '/task-list', component: TaskList },
  { path: '/settings', component: Settings },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
