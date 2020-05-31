import { RepositoryFactory } from '../../API/RepositoryFactory';

const GameRepository = RepositoryFactory.get('games');

const state = {
   games: [],
   bests: [],
   actualGame: {},
   game: {},
};
const getters = {};
const mutations = {
   SET_GAMES: (state, payload) => {
      state.games = payload;
   },
   SET_BESTS: (state, payload) => {
      state.bests = payload;
   },
   SET_GAME: (state, payload) => {
      state.game = payload;
   },
   SET_ACTUAL_GAME: (state, payload) => {
      state.actualGame = payload;
      localStorage.setItem(btoa('actualGame'), btoa(JSON.stringify(payload)));
   },
};
const actions = {
   GET_GAMES: async (context, payload) => {
      let data;
      await GameRepository.get(payload).then((response) => {
         if (response.data.success) context.commit('SET_GAMES', response.data.data.games);
         data = response.data;
      });
      return data;
   },
   GET_BESTS: async (context, payload) => {
      let data;
      await GameRepository.get(payload).then((response) => {
         if (response.data.success) context.commit('SET_BESTS', response.data.data.games);
         data = response.data;
      });
      return data;
   },
   GET_GAME: async (context, payload) => {
      let data;
      await GameRepository.getGame(payload).then((response) => {
         if (response.data.success) context.commit('SET_GAME', response.data.data.game);
         data = response.data;
      });
      return data;
   },
   CREATE_GAME: async (context, payload) => {
      let { data } = await GameRepository.createGame(payload);
      return data;
   },
   MODIF_GAME: async (context, payload) => {
      await context.commit('SET_ACTUAL_GAME', payload);
   },
   UPDATE_GAME: async (context, payload) => {
      let { data } = await GameRepository.updateGame(payload.id, payload);
      return data;
   },
   DELETE_GAME: async (context, payload) => {
      await GameRepository.deleteGame(payload);
   },
};

export default {
   state,
   getters,
   mutations,
   actions,
};
