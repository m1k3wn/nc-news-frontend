import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import { getArticles } from "../api";

export default function ArticlePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState([]);

  // fetch all articles
  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then(({ articles }) => {
        return articles;
      })
      .then((articleData) => {
        setArticles(articleData);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.log(error, "<error in items catch");
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching stuff</p>;

  return (
    <div className="articles-page">
      <h1 className="articles-title">Showing All Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
