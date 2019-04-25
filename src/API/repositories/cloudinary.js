import CloudinaryRepository from '../CloudinaryRepository'
import axios from "axios";

const CLOUDINARY_UPLOAD_PRESET = "gbpsj0zn";
const resource = 'auto/upload';

export default {
    async upload(file) {
        let formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        delete axios.defaults.headers.common['Authorization'];
        return CloudinaryRepository.post(resource, formData).catch(error => error.response);
    }
}