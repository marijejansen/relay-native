import Vue from 'nativescript-vue'
import App from './components/App.vue'
import VueI18n from 'vue-i18n';
import { device } from "tns-core-modules/platform";


import store from './store/index'

import nl from '@/locales/nl.json';
import en from '@/locales/en.json';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
// Prints Colored logs when --env.production is *NOT* set while building
// @ts-ignore
Vue.config.debug = (TNS_ENV !== 'production')

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: device.language,
  fallbackLocale: 'nl',
  messages: Object.assign({
    nl: nl,
    en: en,
  }),
});

new Vue({
  store,
  i18n,
  render: h => h('frame', [h(App)])
}).$start()
