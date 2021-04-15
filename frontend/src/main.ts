import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/index.css';
import router from './router';

library.add(
  faBars,
  faGithub,
);

createApp(App).use(router)
  .component('font-awesome-icon', FontAwesomeIcon).mount('#app');
