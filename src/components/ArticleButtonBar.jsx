import { Link } from "react-router-dom";

import VoteHandler from "./VoteHandler";

export default function ArticleButtonBar({ article }) {
  return (
    <div className="article-buttons-bar">
      <p className="article-info-button">author: {article.author}</p>
      <Link to={`/articles/topics/${article.topic}`}>
        <p id="article-topic-button"># {article.topic}</p>
      </Link>
      <p className="article-info-button">comments: {article.comment_count}</p>
      <div id="article-vote-handler">
        <VoteHandler votes={article.votes} article_id={article.article_id} />
      </div>
    </div>
  );
}
