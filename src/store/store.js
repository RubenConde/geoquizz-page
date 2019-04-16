import Vue from 'vue'
import Vuex from 'vuex'
import series from './modules/series'
import games from './modules/games'
import photos from './modules/photos'
import difficulties from './modules/difficulties'
import users from './modules/users'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        series, games, photos, difficulties, users
    }
})
