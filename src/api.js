import axios from "axios";
import { useParams } from "react-router";

const newsBaseUrl = axios.create({
  baseURL: "https://good-news-api-3uid.onrender.com/api",
});

export const getArticles = () => {
  console.log("get articles invoked");
  return newsBaseUrl
    .get("/articles")
    .then((response) => {
      console.log(response, "<response returned in api util");
      return response.data;
    })
    .catch((error) => {
      console.log(error, "< error in api.js catch");
    });
};
