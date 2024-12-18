import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import { getArticles } from "../api";
import { LoadingAnimation } from "./LoadingAnimation";

export default function ArticlePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [articles, setArticles] = useState([]);

  // fetch all articles
  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then(({ articles }) => {
        setArticles(articles);
        setIsError(false);
        setIsLoading(false);
        return articles;
      })
      .catch((error) => {
        setIsError("Failed to fetch articles :( ");
        setIsLoading(false);
        console.log("Error in articles fetch:", error);
      });
  }, []);

  if (isLoading) return <LoadingAnimation />;

  if (isError) return <p className="error-message">{isError}</p>;

  return (
    <div className="articles-page">
      <h1 className="articles-title">Showing All Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
