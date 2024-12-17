export default function ArticleCard({ article }) {
  return (
    <li className="article-card">
      <h3 className="article-card-title">{article.title}</h3>
      <img className="article-card-image" src={article.article_img_url} />
      <div className="article-card-footer">
        <p className="article-card-topic">Topic: {article.topic}</p>
        <p className="article-card-author">Author: {article.author}</p>
      </div>
    </li>
  );
}

// add onclick routing <Link>
