import axios from "axios";

export const getTvShow = () => {
  return axios.get("https://api.tvmaze.com/shows");
};
