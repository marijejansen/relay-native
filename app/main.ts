import Vue from 'nativescript-vue';
import App from './components/App.vue';
import i18n from '@/locales/i18n';
import store from './store/index';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');
// Prints Colored logs when --env.production is *NOT* set while building
// @ts-ignore
Vue.config.debug = (TNS_ENV !== 'production');

new Vue({
  store,
  i18n,
  render: h => h('frame', [h(App)])
}).$start();
