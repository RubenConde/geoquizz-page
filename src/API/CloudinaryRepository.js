import axios from 'axios/index';

const baseDomain = 'https://api.cloudinary.com/';
const baseURL = baseDomain + 'v1_1/dxskfxwwo/';

export default axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})