import { createStore } from 'vuex'

const store = createStore({
    state() {
        return{
            showView: 0,
        }
    },
    mutations:{
        toggleShowView(state){
            state.showView = !state.showView;
        }
    }
});

export default store;