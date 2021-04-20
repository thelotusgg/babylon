import '@/assets/styles/index.css';
import locales from '@/locales';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBars, faChevronRight, faCogs, faCubes, faSignOutAlt, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';

library.add(
  faBars,
  faChevronRight,
  faCogs,
  faCubes,
  faGithub,
  faSignOutAlt,
  faTimes,
);

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: locales,
});

createApp(App).use(i18n).use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
