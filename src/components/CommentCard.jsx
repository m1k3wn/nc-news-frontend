import CommentButtonBar from "./CommentButtonBar";

export default function CommentCard({ comment }) {
  return (
    <li className="comment-card">
      <p>{comment.body}</p>
      <CommentButtonBar comment={comment} />
    </li>
  );
}
