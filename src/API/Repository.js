import axios from 'axios/index';

const baseDomain = 'https://geoquizz-api.herokuapp.com/';
const baseURL = baseDomain + 'api/v1';

let token;
export default axios.create({
    baseURL,
    headers: {
        'Authorization': 'Bearer ' + token
    }
})