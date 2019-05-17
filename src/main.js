import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Buefy from "buefy";
import mixins from "./mixin/mixins";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(Vuex);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAPS_API_KEY,
    libraries: "places"
  }
});
Vue.mixin(mixins);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
