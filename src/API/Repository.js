import axios from "axios/index";

const baseURL = process.env.VUE_APP_GEOQUIZZ_BASE_URL;

export default axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
