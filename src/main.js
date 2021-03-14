import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Initialize Cloud Firestore through Firebase

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDOUqGSkV9Hl7V_fZ1nwECwVr0SGPgb_QA",
    authDomain: "cs316project-44b71.firebaseapp.com",
    projectId: "cs316project-44b71",
    storageBucket: "cs316project-44b71.appspot.com",
    messagingSenderId: "831681784619",
    appId: "1:831681784619:web:327ccd3d16277e1b21336e",
  }
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')