import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/modal.js';
import './assets/css/reset.css';
import './assets/css/index.css';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
