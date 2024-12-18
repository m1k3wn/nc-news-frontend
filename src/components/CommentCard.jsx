import CommentButtonBar from "./CommentButtonBar";

export default function CommentCard({ comment, onDelete }) {
  return (
    <li className="comment-card">
      <p>{comment.body}</p>
      <CommentButtonBar comment={comment} onDelete={onDelete} />
    </li>
  );
}
