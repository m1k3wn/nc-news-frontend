import VoteHandler from "./VoteHandler";

export default function ArticleButtonBar({ article }) {
  return (
    <div className="article-buttons-bar">
      <p className="article-info-button">author: {article.author}</p>
      <p className="article-info-button">topic: {article.topic}</p>
      <p className="article-info-button">comments: {article.comment_count}</p>
      <div id="article-vote-handler">
        <VoteHandler votes={article.votes} article_id={article.article_id} />
      </div>
    </div>
  );
}
