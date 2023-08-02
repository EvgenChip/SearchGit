import axios from "axios";

export const getUsers = axios.create({
  baseURL: "https://api.github.com/search/",
  responseType: "json",
});
