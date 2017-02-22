import 'babel-polyfill';
import Vue from 'vue';
import store from './vuex/store';
import App from './App';
import router from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
