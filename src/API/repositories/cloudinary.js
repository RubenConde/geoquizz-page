import CloudinaryRepository from "../CloudinaryRepository";
import axios from "axios";

const uploadPreset = process.env.VUE_APP_CLOUDINARY_UPLOAD_PRESET;
const resource = "/auto/upload";

export default {
  async upload(file) {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    delete axios.defaults.headers.common["Authorization"];
    return CloudinaryRepository.post(resource, formData).catch(
      error => error.response
    );
  }
};
