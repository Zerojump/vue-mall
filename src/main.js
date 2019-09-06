// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
import Layout from './components/layout'
import VueRouter from "vue-router";

Vue.use(VueRouter)
// Vue.config.productionTip = false
let router = new VueRouter({
  mode:'history',


})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
