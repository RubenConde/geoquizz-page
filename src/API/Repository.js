import axios from 'axios/index';

const baseDomain = 'https://geoquizz-api.herokuapp.com/';
const baseURL = baseDomain + 'api/v1';

export default axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})