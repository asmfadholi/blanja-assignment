import Vue from 'vue'
import Router from 'vue-router'
import TheHome from '@/components/TheHome'
import Vuelidate from '@/components/Vuelidate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/vuelidate',
      name: 'Vuelidate',
      component: Vuelidate
    }
  ]
})
