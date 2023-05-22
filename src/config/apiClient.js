import axios from "axios";

export default axios.create({
  baseURL: "https://node-to-do-pb.onrender.com/",
  headers: {
    "Content-type": "application/json"
  }
});
