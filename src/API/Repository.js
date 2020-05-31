import axios from 'axios/index';

const baseURL = process.env.VUE_APP_GEOQUIZZ_BASE_URL;
const token = atob(localStorage.getItem(btoa('token')));

export default axios.create({
   baseURL,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
   },
});
