import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Buefy from 'buefy'
import mixins from './mixin/mixins'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'material-icons/iconfont/material-icons.css';


Vue.config.productionTip = true;
Vue.use(Buefy);
Vue.use(Vuex);
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyBYvJclxzDhwLyoHs5o0HdOS_fcFiUZj4I",
        libraries: "places"
    }
});
Vue.mixin(mixins);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
