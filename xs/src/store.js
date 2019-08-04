import Vue from 'vue'
import Vuex from 'vuex'
import Tab from "./views/store/tab"
import Detail from "./views/store/deatils"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Tab: Tab,
        Detail: Detail
    }
})