import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { getArticleComments } from "../api";
import { LoadingAnimation } from "./LoadingAnimation";
import CommentForm from "./CommentForm";
import { deleteArticleComment } from "../api";

export default function CommentList({ article_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    //prevents unresolved article_id being passed to Axios fetcher
    if (!article_id) return;
    setIsLoading(true);
    getArticleComments(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsError(false);
        setIsLoading(false);
        return comments;
      })
      .catch((error) => {
        setIsError("Failed to load comments, boo...");
        console.log("error returned from util: ", error);
      })
      .finally(() => setIsLoading(false));
  }, [article_id]);

  // optimistic rendering update of comments list
  const handleDeleteComment = (comment_id) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== comment_id)
    );

    deleteArticleComment(comment_id)
      .then(() => {
        console.log("comment deleted!!");
      })
      .catch((error) => {
        console.log("Error deleting comment: ", error);
      });
  };

  if (isLoading) return <LoadingAnimation />;

  if (isError) return <p className="error-message">{isError}</p>;

  return (
    <div className="comments-component">
      <CommentForm article_id={article_id} />
      <ul className="comments-list-component">
        {comments.map((currentComment) => {
          return (
            <CommentCard
              comment={currentComment}
              key={currentComment.comment_id}
              onDelete={() => handleDeleteComment(currentComment.comment_id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
