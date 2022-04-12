import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)

const state = {
    carlist: []
}
const store = new Vuex.Store({
    state,
    mutations:{
            add(state,payload){
                payload.count++
            },
        addto(state, payload) {
            payload.checked=true
            state.carlist.push(payload)
        }
    },
    actions:{
        addcart(context, payload){
            let product = context.state.carlist.find((item) => {
                return item.iid == payload.iid
            })
            if (product) {
                context.commit('add',product)
            } else {
                payload.count = 1
                context.commit('addto',payload)

    }
        }
    },
    getters
})
export default store