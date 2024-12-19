import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import { getArticles } from "../api";
import { LoadingAnimation } from "./LoadingAnimation";
import { getArticlesByTopic } from "../api";
import { useParams } from "react-router";

export default function ArticlePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [articles, setArticles] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    if (topic) {
      getArticlesByTopic(topic)
        .then(({ articles }) => {
          setArticles(articles);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsError("Failed to fetch articles :( ");
          setIsLoading(false);
          console.log("Error in articles fetch:", error);
        });
    } else {
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
    }
  }, [topic]);

  if (isLoading) return <LoadingAnimation />;

  if (isError) return <p className="error-message">{isError}</p>;

  return (
    <div className="articles-page">
      {topic ? (
        <h1 className="articles-title">Showing All {topic} Articles</h1>
      ) : (
        <h1 className="articles-title">Showing All Articles</h1>
      )}

      <ArticleList articles={articles} />
    </div>
  );
}
