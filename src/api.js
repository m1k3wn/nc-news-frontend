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
      throw error;
    });
};

export const getArticleById = (article_id) => {
  return newsBaseUrl
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error, "< error in single article fetch");
      throw error;
    });
};

export const getArticleComments = (article_id) => {
  return newsBaseUrl
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error, "< error in comments fetch");
      throw error;
    });
};

export const updateVotesByArticleId = (article_id, increment) => {
  return newsBaseUrl
    .patch(`/articles/${article_id}`, { inc_votes: increment })
    .then(() => {
      console.log(`votes updated for article id: ${article_id}`);
    });
};
