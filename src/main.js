import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import M from 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
Vue.component('Loader', Loader)


Vue.prototype.$M = M

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)

firebase.initializeApp({
  apiKey: "AIzaSyDxbiS1QJvidak532awZ1a83CjNJvbnePk",
  authDomain: "vue-crm-92219.firebaseapp.com",
  databaseURL: "https://vue-crm-92219.firebaseio.com",
  projectId: "vue-crm-92219",
  storageBucket: "vue-crm-92219.appspot.com",
  messagingSenderId: "1098656290189",
  appId: "1:1098656290189:web:c9b9ba0caadbbe415a19c4",
  measurementId: "G-Z616P8GX3X"
})

let app 

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


