export default function ArticleButtonBar({ article }) {
  console.log(article, "< in button bar");
  return (
    <div className="article-buttons-bar">
      <p className="article-info-button">author: {article.author}</p>
      <p className="article-info-button">topic: {article.topic}</p>
      <p className="article-info-button">votes: {article.votes}</p>
      <p className="article-info-button">comments: {article.comment_count}</p>
      <p className="article-vote-button"> + vote</p>
      <p className="article-vote-button"> - vote </p>
    </div>
  );
}
