import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router";
import SingleArticleCard from "./SingleArticleCard";
import { LoadingAnimation } from "./LoadingAnimation";
import CommentList from "./CommentList";

export default function SingleArticle() {
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
        console.log(error, "< error in single article card");
      });
  }, []);

  if (isLoading) return <LoadingAnimation />;
  if (isError) return <p>Error fetching article </p>;

  return (
    <div className="single-article-page">
      <SingleArticleCard article={currentArticle} />
      <CommentList article_id={currentArticle.article_id} />
    </div>
  );
}
