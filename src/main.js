import Vue from 'vue'
import App from './App.vue'
import router from './router'
window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import Home from './components/Home'
import Login from './components/Login'

import Firebase from 'firebase';
import firebaseConfig from '@/firebase';

Firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  Home,
  Login,
  render: h => h(App),
}).$mount('#app')
