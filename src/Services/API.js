import Axios from "axios";

const api = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;