import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Buefy from 'buefy'
import mixins from './mixin/mixins'

Vue.config.productionTip = true;
Vue.use(Buefy);
Vue.use(Vuex);
Vue.mixin(mixins);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
