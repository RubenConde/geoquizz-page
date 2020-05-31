import { RepositoryFactory } from '../../API/RepositoryFactory';
import axios from 'axios';

const PhotoRepository = RepositoryFactory.get('photos');
const CloudinaryRepository = RepositoryFactory.get('cloudinary');

const state = {
   photos: [],
   photo: {},
};
const getters = {
   PHOTOS_BY_SERIES: (state, getters) => (idSeries) => {
      return state.photos.filter((photo) => photo.photo.idSeries === idSeries);
   },
};
const mutations = {
   SET_PHOTOS: (state, payload) => {
      state.photos = payload;
   },
   SET_PHOTO: (state, payload) => {
      state.photo = payload;
   },
   ADD_PHOTOS: (state, payload) => {
      state.photos.push({ photo: payload });
   },
};
const actions = {
   GET_PHOTOS: async (context, payload) => {
      let data;
      await PhotoRepository.get(payload).then((response) => {
         if (response.data.success) context.commit('SET_PHOTOS', response.data.data.photos);
         data = response.data;
      });
      return data;
   },
   GET_PHOTO: async (context, payload) => {
      let data;
      await PhotoRepository.getPhoto(payload).then((response) => {
         if (response.data.success) context.commit('SET_PHOTO', response.data.data.photo);
         data = response.data;
      });
      return data;
   },
   CREATE_PHOTO: async (context, payload) => {
      let data;
      await PhotoRepository.createPhoto(payload).then((response) => {
         if (response.data.success) context.commit('ADD_PHOTOS', response.data.data);
         data = response.data;
      });
      return data;
   },
   UPLOAD_PHOTO: async (context, payload) => {
      let data;
      await CloudinaryRepository.upload(payload).then((response) => {
         axios.defaults.headers.common['Authorization'] =
            'Bearer ' + atob(localStorage.getItem(btoa('token')));
         data = response.data;
      });
      return data;
   },
   UPDATE_PHOTO: async (context, payload) => {
      let { data } = await PhotoRepository.updatePhoto(payload.id, payload);
      return data;
   },
   DELETE_PHOTO: async (context, payload) => {
      await PhotoRepository.deletePhoto(payload);
   },
};
export default {
   state,
   getters,
   mutations,
   actions,
};
