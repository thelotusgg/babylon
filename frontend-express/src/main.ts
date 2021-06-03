import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/style/tailwind.css';
import VueApollo from 'vue-apollo';
import router from './router';
import App from './App.vue';
import apolloClient from './apolloClient';

library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
