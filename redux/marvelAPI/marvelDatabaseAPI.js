import axios from "axios";

export default axios.create({
  baseURL: "https://developer.marvel.com/v1/",
});
