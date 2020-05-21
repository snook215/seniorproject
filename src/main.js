import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

// Font AwesomeIcon for more info https://github.com/FortAwesome/vue-fontawesome#installation
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)

Vue.use(Chartkick.use(Chart))

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

//testnook


// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

//sets our app in development 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
