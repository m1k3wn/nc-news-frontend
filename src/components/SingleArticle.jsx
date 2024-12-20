import { useEffect, useState } from "react";
import { useParams } from "react-router";
// resources
import { getArticleById } from "../api";
import { LoadingAnimation } from "./LoadingAnimation";
// components
import SingleArticleCard from "./SingleArticleCard";
import CommentList from "./CommentList";

export default function SingleArticle() {
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ article }) => {
        return article;
      })
      .then((returnedArticle) => {
        setCurrentArticle(returnedArticle);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError("Coudln't find this article, sorry bae");
        setIsLoading(false);
        console.log("Error in single article fetch: ", error);
      });
  }, []);

  if (isLoading) return <LoadingAnimation />;
  if (isError)
    return (
      <div className="error-page">
        <p className="error-message">{isError}</p>
        <button className="go-back-button" onClick={() => window.history.back()}>Go Back</button>
      </div>
    );

  return (
    <div className="single-article-page">
      <SingleArticleCard article={currentArticle} />

      <CommentList article_id={currentArticle.article_id} />
    </div>
  );
}
