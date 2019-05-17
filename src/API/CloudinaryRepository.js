import axios from "axios/index";

const baseDomain = "https://api.cloudinary.com/";
const version = "v1_1/";
const cloudName = process.env.VUE_APP_CLOUDINARY_CLOUD_NAME;
const baseURL = baseDomain + version + cloudName;

export default axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});
