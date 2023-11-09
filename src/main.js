import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import App from './App.vue';

import { en } from '../src/locales/en.js';
import { pt_BR } from '../src/locales/pt_BR.js';

const languages = {
  en,
  pt_BR,
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt_BR',
  fallbackLocale: 'en',
  messages: languages,
});

createApp(App).use(i18n).mount('#app');
