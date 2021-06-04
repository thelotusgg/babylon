import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faChevronRight,
  faLanguage,
  faUser,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/style/tailwind.css';
import VueApollo from 'vue-apollo';
import VueI18n from 'vue-i18n';
import locales from '@/locales';
import router from './router';
import App from './App.vue';
import apolloClient from './apolloClient';

// font awesome
library.add(faBars, faChevronRight, faLanguage, faUser, faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// vue apollo
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  errorHandler(error) {
    console.error(error);
  },
});

// vue i18n
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: locales,
});

// vue app
Vue.config.productionTip = false;
new Vue({
  router,
  apolloProvider,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
