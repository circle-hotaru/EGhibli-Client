import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import APlayer from '@moefe/vue-aplayer'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(APlayer, {
  defaultCover: '/images/logo.png',
  productionTip: true,
});

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
