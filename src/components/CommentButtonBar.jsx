import { useContext } from "react";
import { UserContext } from "../context/userContext";
import DeleteComment from "./DeleteComment";
import { dateConverter } from "../utils";

export default function CommentButtonBar({ comment, onDelete }) {
  const { user } = useContext(UserContext);

  return (
    <div className="comment-button-bar">
      <p className="comment-date-stamp">
        Posted: {dateConverter(comment.created_at)}
      </p>
      <p className="comment-info-button">Author: {comment.author}</p>
      <p className="comment-info-button">Votes: {comment.votes}</p>
      {comment.author === user ? <DeleteComment onDelete={onDelete} /> : null}
    </div>
  );
}
