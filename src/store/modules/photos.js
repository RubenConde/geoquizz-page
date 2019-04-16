import {RepositoryFactory} from "../../API/RepositoryFactory";

const PhotoRepository = RepositoryFactory.get('photos');


const state = {
    photos: []
};
const getters = {};
const mutations = {
    SET_PHOTOS: (state, payload) => {
        state.photos = payload
    },
    ADD_PHOTOS: (state, payload) => {
        state.photos.push({photo: payload})
    }
};
const actions = {
    GET_PHOTOS: async (context, payload) => {
        let data;
        await PhotoRepository.get(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('SET_PHOTOS', response.data.data.photos);
                data = response.data
            });
        return data
    },
    CREATE_PHOTO: async (context, payload) => {
        let data;
        await PhotoRepository.createPhoto(payload)
            .then(response => {
                if (response.data.success)
                    context.commit('ADD_PHOTOS', response.data.data);
                data = response.data
            });
        return data
    },
    UPDATE_PHOTO: async (context, payload) => {
        let {data} = await PhotoRepository.updatePhoto(payload.id, payload);
        return data
    },
    DELETE_PHOTO: async (context, payload) => {
        await PhotoRepository.deletePhoto(payload);
    }
};

export default {
    state, getters, mutations, actions
}