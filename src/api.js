import axios from "axios";

const newsBaseUrl = axios.create({
  baseURL: "https://good-news-api-3uid.onrender.com/api",
});

/* Articles Utils */
export const getArticles = () => {
  return newsBaseUrl.get("/articles").then(({ data }) => data);
};

export const getArticleById = (article_id) => {
  return newsBaseUrl.get(`/articles/${article_id}`).then(({ data }) => data);
};

export const updateVotesByArticleId = (article_id, increment) => {
  return newsBaseUrl
    .patch(`/articles/${article_id}`, { inc_votes: increment })
    .then(() => {
      console.log(`votes updated for article id: ${article_id}`);
    });
};

/* Comments Utils */
export const getArticleComments = (article_id) => {
  return newsBaseUrl
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => data);
};

export const postArticleComment = (article_id, user, comment) => {
  return newsBaseUrl
    .post(`/articles/${article_id}/comments`, {
      username: user,
      body: comment,
    })
    .then(({ data }) => {
      console.log(`comment by: ${user}. Posted to article id: ${article_id}`);
      return data;
    });
};

export const deleteArticleComment = (comment_id) => {
  return newsBaseUrl.delete(`/comments/${comment_id}`);
};

/* Topics Utils */

export const getAllTopics = () => {
  return newsBaseUrl.get("/topics").then(({ data }) => data);
};

export const getArticlesByTopic = (topic) => {
  return newsBaseUrl.get(`/articles?topic=${topic}`).then(({ data }) => data);
};
