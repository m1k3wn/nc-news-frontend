import ArticleButtonBar from "./ArticleButtonBar";

export default function SingleArticleCard({ article }) {
  console.log(article, "<current article in card ");
  return (
    <div className="single-article-card">
      <h1 className="single-article-title">{article.title}</h1>
      <img className="single-article-image" src={article.article_img_url}></img>
      <ArticleButtonBar article={article} />
      <p className="single-article-body">{article.body}</p>
    </div>
  );
}
