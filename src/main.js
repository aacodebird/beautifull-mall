// import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

// createApp(App).mount('#app')
new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')