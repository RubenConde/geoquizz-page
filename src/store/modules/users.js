import {RepositoryFactory} from "../../API/RepositoryFactory";

const UserRepository = RepositoryFactory.get('users');


const state = {
    token: '',
    user: []
};
const getters = {};
const mutations = {
    SET_TOKEN: (state, payload) => {
        state.token = payload
    },
    SET_USER: (state, payload) => {
        state.user = payload
    },
};
const actions = {
    GET_USER: async (context) => {
        let data;
        await UserRepository.getUser()
            .then(response => {
                if (response.data.success)
                    context.commit('SET_USER', response.data);
                data = response.data
            });
        return data
    },
    REGISTER: async (context, payload) => {
        let data;
        await UserRepository.register(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('SET_TOKEN', response.data.data.token);
                data = response.data
            });
        return data
    },
    LOGIN: async (context, payload) => {
        let data;
        await UserRepository.login(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('SET_TOKEN', response.data.data.token);
                data = response.data
            });
        return data
    },
    LOGOUT: async (context) => {
        let data;
        await UserRepository.logout()
            .then(response => {
                if (response.data.success)
                    context.commit('SET_TOKEN', '');
                data = response.data
            });
        return data
    }
};

export default {
    state, getters, mutations, actions
}