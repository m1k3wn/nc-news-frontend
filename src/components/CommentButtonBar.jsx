import { dateConverter } from "../utils";
export default function CommentButtonBar({ comment }) {
  return (
    <div className="comment-button-bar">
      <p className="comment-date-stamp">
        Posted: {dateConverter(comment.created_at)}
      </p>
      <p className="comment-info-button">Author: {comment.author}</p>
      <p className="comment-info-button">Votes: {comment.votes}</p>
    </div>
  );
}
