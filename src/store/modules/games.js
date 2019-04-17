import {RepositoryFactory} from "../../API/RepositoryFactory";

const GameRepository = RepositoryFactory.get('games');


const state = {
    games: [],
    actualGame: {}
};
const getters = {};
const mutations = {
    SET_GAMES: (state, payload) => {
        state.games = payload
    },
    SET_ACTUAL_GAME: (state, payload) => {
        state.actualGame = payload
    },
};
const actions = {
    GET_GAMES: async (context, payload) => {
        let data;
        await GameRepository.get(payload).then(response => {
            if (response.data.success)
                context.commit('SET_GAMES', response.data.data.games);
            data = response.data;
        });
        return data
    },
    CREATE_GAME: async (context, payload) => {
        let data;
        await GameRepository.createGame(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('SET_ACTUAL_GAME', response.data.data);
                data = response.data;
            });
        return data
    },
    MODIF_GAME: async (context, payload) => {
        await context.commit('SET_ACTUAL_GAME', payload);
    },
    UPDATE_GAME: async (context, payload) => {
        let {data} = await GameRepository.updateGame(payload.id, payload);
        return data
    },
    DELETE_GAME: async (context, payload) => {
        await GameRepository.deleteGame(payload);
    }
};

export default {
    state, getters, mutations, actions
}