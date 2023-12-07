import { createStore } from 'vuex'

const store = createStore({
    state() {
        return{
            showView: true,
            
        }
    },
    mutations:{
        toggleShowView(state){
            console.log('改變前:'+state.showView);
            state.showView = !state.showView;
            console.log('改變後:'+state.showView);
        }
    }
});
export default store;