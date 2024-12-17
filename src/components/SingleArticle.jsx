import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router";
import SingleArticleCard from "./SingleArticleCard";

export default function SingleArticle() {
  const [currentArticle, setCurrentArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { article_id } = useParams();
  console.log(article_id, "< id in single article");

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ article }) => {
        console.log(article, "< article returned in singlearticlecard");
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

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching article </p>;

  return (
    <div className="single-article-container">
      <SingleArticleCard article={currentArticle} />
    </div>
  );
}
