import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8ea3e97eb9974c398f458c6e6975d917",
  },
});
