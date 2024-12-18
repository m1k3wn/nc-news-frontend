import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { postArticleComment } from "../api";

export default function CommentForm({ article_id }) {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [isError, setIsError] = useState(null);
  const [isPosted, setIsPosted] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!comment.trim()) {
      setIsError("Say something!");
      return;
    }
    postArticleComment(article_id, user, comment)
      .then(() => {
        setComment("");
        setIsPosted("Comment posted!");
        setIsError(null);
      })
      .catch((error) => {
        setIsError("Failed to Submit Comment, soz :(");
        console.log("Error posting comment: ", error);
      });
  };

  const handleChange = (event) => {
    setComment(event.target.value);
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
          value={comment}
          maxLength={1000}
          onChange={handleChange}
        ></textarea>
        <p id="comment-error">{isError}</p>

        <button type="submit" id="comment-submit-button">
          Submit
        </button>
        <button
          type="reset"
          id="comment-clear-button"
          onClick={() => setComment("")}
          onClick={() => setIsError("")}
          onClick={() => setIsPosted(false)}
        >
          Clear
        </button>
        {isPosted ? <p id="form-submission-text">{isPosted}</p> : null}
      </form>
    </div>
  );
}
