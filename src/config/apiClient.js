import axios from "axios";

export default axios.create({
  baseURL: "https://json-server-sigma-lilac.vercel.app/",
  headers: {
    "Content-type": "application/json"
  }
});
