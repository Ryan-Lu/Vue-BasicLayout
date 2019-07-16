import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Dashboard from './components/Dashboard'
import Monitor from './components/Monitor'

Vue.use(VueRouter)

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/monitor', component: Monitor }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
