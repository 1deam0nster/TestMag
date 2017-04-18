// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource';
import Header from './components/Header'
import Content from './components/Content'

Vue.use(vueResource);
Vue.component('app-header', Header)
Vue.component('app-content', Content)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
