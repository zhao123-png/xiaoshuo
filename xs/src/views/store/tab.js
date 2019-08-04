var tab = {
    state: {
        tab: []
    },
    getters: {},
    mutations: {
        showTab(state, tabArr) {
            state.tab = tabArr.tab;
        }
    },
    actions: {
        showTabFun(com, tabArr) {
            com.commit("showTab", tabArr);
        }
    }
}

export default tab;