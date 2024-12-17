import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { getArticleComments } from "../api";
import { LoadingAnimation } from "./LoadingAnimation";

export default function CommentList({ article_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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
        setIsError(true);
        console.log(error, "<error returned from util");
      })
      .finally(() => setIsLoading(false));
  }, [article_id]);

  if (isLoading) return <LoadingAnimation />;

  if (isError) return <p>Error fetching comments</p>;

  return (
    <div className="comments-component">
      <ul className="comments-list-component">
        {comments.map((currentComment) => {
          return (
            <CommentCard
              comment={currentComment}
              key={currentComment.comment_id}
            />
          );
        })}
      </ul>
    </div>
  );
}
