import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import Mintui from "mint-ui"
import headerXs from "./views/headerXS"
import "mint-ui/lib/style.css"
Vue.use(Mintui);
Vue.component("headerXs", headerXs);
Vue.config.productionTip = false
axios.defaults.baseURL = "https://www.apiopen.top/";
axios.defaults.withCredentials = "true";
Vue.prototype.axios = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')