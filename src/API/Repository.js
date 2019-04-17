import axios from 'axios/index';

const baseDomain = 'http://127.0.0.1:8001/';
const baseURL = baseDomain + 'api/v1';

export default axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})