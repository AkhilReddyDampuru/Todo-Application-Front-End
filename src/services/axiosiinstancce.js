import axios from "axios";

const baseURL = "http://localhost:4000";

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
