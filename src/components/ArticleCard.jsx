import { Link, useNavigate } from "react-router-dom";
import { dateConverter } from "../utils";

export default function ArticleCard({ article }) {
  const navigate = useNavigate();
  return (
    <Link to={`/articles/${article.article_id}`}>
      <li className="article-card">
        <h3 className="article-card-title">{article.title}</h3>
        <img className="article-card-image" src={article.article_img_url} />
        <p className="article-date-stamp">
          {dateConverter(article.created_at)}
        </p>
        <div className="article-card-footer">
          <p
            className="article-card-topic-link"
            onClick={(event) => {
              event.preventDefault();
              navigate(`/articles/topics/${article.topic}`);
            }}
          >
            # {article.topic}
          </p>
          <p className="article-card-info">Author: {article.author}</p>
          <p className="article-card-info">Votes: {article.votes}</p>
        </div>
      </li>
    </Link>
  );
}
