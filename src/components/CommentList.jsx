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
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    //prevents unresolved article_id being passed to Axios fetcher
    if (!article_id) return;
    setIsLoading(true);
    getArticleComments(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsError(false);
        setIsLoading(false);
        // return comments;
      })
      .catch((error) => {
        setIsError("Failed to load comments, boo...");
        console.log("error returned from util: ", error);
      })
      .finally(() => setIsLoading(false));
  }, [article_id]);

  // State handler: passes down to commentCard and commentForm wrapped in callback
  const addComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  const handleDeleteComment = (comment_id) => {
    // optimistically render failed delete
    const restoredComment = comments.find(
      (comment) => comment.comment_id === comment_id
    );
    // optimistically render comment removal
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== comment_id)
    );

    deleteArticleComment(comment_id)
      .then(() => {
        setDeleteError(false);
      })
      .catch((error) => {
        setDeleteError("Couldn't delete right now, soz bae");
        setComments((prevComments) => [restoredComment, ...prevComments]);

        setTimeout(() => {
          setDeleteError(null);
        }, 2000);
      });
  };

  if (isLoading) return <LoadingAnimation />;

  if (isError) return <p className="error-message">{isError}</p>;

  return (
    <div className="comments-component">
      <CommentForm article_id={article_id} addComment={addComment} />
      {deleteError ? <p className="error-message">{deleteError}</p> : null}
      <ul className="comments-list-component">
        {comments.map((currentComment) => {
          return (
            <CommentCard
              comment={currentComment}
              key={currentComment.comment_id}
              // pass down to comment card with current comment_id, delay invocation
              onDelete={() => handleDeleteComment(currentComment.comment_id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
