import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import APlayer from '@moefe/vue-aplayer'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'

import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(APlayer, {
  defaultCover: '/images/logo.png',
  productionTip: true,
});

Vue.use(ElementUI)
Vue.use(VueLazyload)

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
