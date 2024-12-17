import ArticleButtonBar from "./ArticleButtonBar";
import { dateConverter } from "../utils";

export default function SingleArticleCard({ article }) {
  const formattedDate = article.created_at
    ? dateConverter(article.created_at)
    : "Loading date...";

  return (
    <div className="single-article-card">
      <h1 className="single-article-title">{article.title}</h1>
      <img className="single-article-image" src={article.article_img_url}></img>
      <ArticleButtonBar article={article} />
      <p className="article-date-stamp">{formattedDate}</p>
      <p className="single-article-body">{article.body}</p>
    </div>
  );
}
