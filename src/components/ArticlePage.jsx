import { useState, useEffect } from "react";
import { useParams } from "react-router";
/* Utils */
import { getArticles, getArticlesByTopic } from "../api";
import { LoadingAnimation } from "./LoadingAnimation";
/* Components */
import ArticleList from "./ArticleList";
import ArticleSortController from "./ArticleSortController";

export default function ArticlePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [sortedBy, setSortedBy] = useState("created_at&order=DESC");

  const { topic } = useParams();

  const handleSort = (sortParam) => {
    setSortedBy(sortParam);
  };

  // reset sort order on new topic selection
  useEffect(() => {
    if (topic) {
      setSortedBy("created_at&order=DESC");
    }
  }, [topic]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);

    const fetchArticles = topic
      ? () => getArticlesByTopic(topic, sortedBy)
      : () => getArticles(sortedBy);

    fetchArticles()
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError("Failed to fetch articles :( ");
        setIsLoading(false);
        console.log("Error in articles fetch:", error);
      });
  }, [topic, sortedBy]);

  if (isLoading) return <LoadingAnimation />;
  if (isError) return <p className="error-message">{isError}</p>;

  return (
    <div className="articles-page">
      {topic ? (
        <h1 className="articles-title">Showing All {topic} Articles</h1>
      ) : (
        <h1 className="articles-title">Showing All Articles</h1>
      )}
      <ArticleSortController sortedBy={sortedBy} handleSort={handleSort} />
      <ArticleList articles={articles} />
    </div>
  );
}
