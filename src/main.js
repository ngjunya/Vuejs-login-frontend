import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store/store'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)



new Vue({
  router:routes,
  store:store,
  render: h => h(App),
}).$mount('#app')
