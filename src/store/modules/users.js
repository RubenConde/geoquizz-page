import { RepositoryFactory } from '../../API/RepositoryFactory';
import axios from 'axios';

const UserRepository = RepositoryFactory.get('users');

const state = {
   token: localStorage.getItem('token') || '',
   user: {},
};
const getters = {
   isAuthenticated: (state) => !!state.token,
};
const mutations = {
   SET_TOKEN: (state, payload) => {
      state.token = payload;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload;
      localStorage.setItem('token', payload);
   },
   DELETE_TOKEN: (state) => {
      state.token = '';
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
   },
   SET_USER: (state, payload) => {
      state.user = payload;
   },
};
const actions = {
   GET_USER: async (context) => {
      let data;
      await UserRepository.getUser().then((response) => {
         if (response.data.success) {
            context.commit('SET_USER', response.data.data);
         }
         data = response.data;
      });
      return data;
   },
   REGISTER: async (context, payload) => {
      let data;
      await UserRepository.register(payload).then((response) => {
         if (response.data.success) {
            context.commit('SET_TOKEN', response.data.data.token);
         } else {
            context.commit('DELETE_TOKEN');
         }
         data = response.data;
      });
      return data;
   },
   LOGIN: async (context, payload) => {
      let data;
      await UserRepository.login(payload).then((response) => {
         if (response.data.success) {
            context.commit('SET_TOKEN', response.data.data.token);
         } else {
            context.commit('DELETE_TOKEN');
         }
         data = response.data;
      });
      return data;
   },
   LOGOUT: async (context) => {
      let data;
      await UserRepository.logout().then((response) => {
         if (response.data.success) {
            context.commit('DELETE_TOKEN');
            context.commit('SET_USER', {});
         }
         data = response.data;
      });
      return data;
   },
};

export default {
   state,
   getters,
   mutations,
   actions,
};
