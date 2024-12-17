import axios from "axios";


const newsBaseUrl = axios.create({
  baseURL: "https://good-news-api-3uid.onrender.com/api",
});

export const getArticles = () => {
  return newsBaseUrl
    .get("/articles")
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error, "< error in api.js catch");
    });
};

export const getArticleById = (article_id) => {
  console.log("article fetch by id invoked");
  return newsBaseUrl
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      console.log(data, "<single article data return in util");
      return data;
    })
    .catch((error) => {
      console.log(error, "< error in single article fetch");
    });
};
