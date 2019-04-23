import {RepositoryFactory} from "../../API/RepositoryFactory";

const DifficultyRepository = RepositoryFactory.get('difficulties');


const state = {
    difficulties: [],
    difficulty: {}
};
const getters = {};
const mutations = {
    SET_DIFFICULTIES: (state, payload) => {
        state.difficulties = payload
    },
    SET_DIFFICULTY: (state, payload) => {
        state.difficulty = payload
    },
    ADD_DIFFICULTY: (state, payload) => {
        state.difficulties.push({difficulty: payload})
    }
};
const actions = {
    GET_DIFFICULTIES: async (context, payload) => {
        let data;
        await DifficultyRepository.get(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('SET_DIFFICULTIES', response.data.data.difficulties);
                data = response.data;
            });
        return data
    },
    GET_DIFFICULTY: async (context, payload) => {
        let data;
        await DifficultyRepository.getDifficulty(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('SET_DIFFICULTY', response.data.data.difficulty);
                data = response.data
            });
        return data
    },
    CREATE_DIFFICULTY: async (context, payload) => {
        let data;
        await DifficultyRepository.createDifficulty(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('ADD_DIFFICULTY', response.data.data);
                data = response.data
            });
        return data
    },
    UPDATE_DIFFICULTY: async (context, payload) => {
        let {data} = await DifficultyRepository.updateDifficulty(payload.id, payload);
        return data
    },
    DELETE_DIFFICULTY: async (context, payload) => {
        await DifficultyRepository.deleteDifficulty(payload);
    }
};

export default {
    state, getters, mutations, actions
}