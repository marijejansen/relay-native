import Vue from 'nativescript-vue';
import VueI18n from 'vue-i18n';
import { device } from 'tns-core-modules/platform';

import nl from '@/locales/nl.json';
import en from '@/locales/en.json';

Vue.use(VueI18n);

export default new VueI18n({
  locale: device.language,
  fallbackLocale: 'en',
  messages: Object.assign({
    nl: nl,
    en: en
  })
});
