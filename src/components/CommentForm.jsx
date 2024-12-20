import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { postArticleComment } from "../api";

export default function CommentForm({ article_id, addComment }) {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [isPosted, setIsPosted] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newComment.trim()) {
      setIsError("Say something!");
      return;
    }

    postArticleComment(article_id, user, newComment)
      .then(({ comment }) => {
        setNewComment("");
        setIsPosted(true);
        setIsError(null);
        addComment(comment);
        setTimeout(() => {
          setIsPosted(false);
        }, 3000);
      })
      .catch((error) => {
        setIsError("Failed to Submit Comment, soz :(");
        setIsPosted(false);
        console.log("Error posting comment: ", error);
      });
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleClear = () => {
    setNewComment("");
    setIsError(null);
    setIsPosted(false);
  };

  return (
    <div className="comment-form-wrapper">
      <h2 id="comment-form-title">Add a comment</h2>
      <p id="comment-form-subtitle">Stick your deranged thoughts here...</p>

      <form id="article-comment-form" onSubmit={handleSubmit}>
        <textarea
          id="comment-text-box"
          rows="5"
          cols="60"
          name="text"
          placeholder="Enter text"
          value={newComment}
          maxLength={1000}
          onChange={handleChange}
        ></textarea>
        {isError ? <p className="error-message">{isError}</p> : null}
        <div className="form-button-group">
          <button type="submit" id="comment-submit-button">
            Submit
          </button>
          <button type="reset" id="comment-clear-button" onClick={handleClear}>
            Clear
          </button>
        </div>
        {isPosted ? <p id="form-submission-text">Comment Posted!</p> : null}
      </form>
    </div>
  );
}
