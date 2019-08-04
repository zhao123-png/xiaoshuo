var detail = {
    state: {
        detailList: [],
        arr: []
    },
    getters: {
        spliceDetail(state) {
            state.arr = state.detailList.splice(0, 4);

            return state.arr;
        }
    },
    mutations: {
        giveState(state, detArr) {
            state.detailList = detArr.list;
            for (var i = 0; i < state.arr.length; i++) {
                state.detailList.push(state.arr[i]);
            }
        }
    },
    actions: {
        giveStateFun(state, detArr) {
            state.commit("giveState", detArr);
        }
    }
}

export default detail;