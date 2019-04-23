import {RepositoryFactory} from "../../API/RepositoryFactory";

const SeriesRepository = RepositoryFactory.get('series');


const state = {
    series: [],
    aSeries: {}
};
const getters = {};
const mutations = {
    SET_SERIES: (state, payload) => {
        state.series = payload
    },
    SET_A_SERIES: (state, payload) => {
        state.aSeries = payload
    },
    ADD_SERIES: (state, payload) => {
        state.series.push({series: payload})
    }
};
const actions = {
    GET_SERIES: async (context, payload) => {
        let data;
        await SeriesRepository.get(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('SET_SERIES', response.data.data.series);
                data = response.data
            });
        return data
    },
    GET_A_SERIES: async (context, payload) => {
        let data;
        await SeriesRepository.getSeries(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('SET_A_SERIES', response.data.data.series)
                data = response.data
            });
        return data
    },
    CREATE_SERIES: async (context, payload) => {
        let data;
        await SeriesRepository.createSeries(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('ADD_SERIES', response.data.data);
                data = response.data
            });
        return data
    },
    UPDATE_SERIES: async (context, payload) => {
        let {data} = await SeriesRepository.updateSeries(payload.id, payload);
        return data
    },
    DELETE_SERIES: async (context, payload) => {
        await SeriesRepository.deleteSeries(payload);
    }
};

export default {
    state, getters, mutations, actions
}