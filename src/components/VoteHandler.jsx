import { useState } from "react";
import { updateVotesByArticleId } from "../api";

export default function VoteHandler({ votes, article_id }) {
  const [votesAdded, setVotesAdded] = useState(0);
  const [isError, setIsError] = useState(null);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);

  function handleClick(increment) {
    updateVotesByArticleId(article_id, increment).catch((error) => {
      setVotesAdded((currentVotesAdded) => {
        setIsError("Your vote was not successful. Please try again!");
        console.log("Error handling vote: ", error);
        return currentVotesAdded - 1;
      });
    });
    increment > 0
      ? setVotesAdded((currentVotesAdded) => {
          return currentVotesAdded + 1;
        })
      : setVotesAdded((currentVotesAdded) => {
          return currentVotesAdded - 1;
        });
  }
  return (
    <div className="article-vote-card">
      <p id="votes-count">Votes: {votes + votesAdded} </p>

      <button
        className="vote-button"
        onClick={() => {
          handleClick(1);
          setHasUpVoted(true);
          setHasDownVoted(false);
        }}
        disabled={hasUpVoted}
      >
        Up Vote!
      </button>
      <button
        className="vote-button"
        onClick={() => {
          handleClick(-1);
          setHasDownVoted(true);
          setHasUpVoted(false);
        }}
        disabled={hasDownVoted}
      >
        Down Vote!
      </button>
      {isError ? <p className="error-message">{isError}</p> : null}
    </div>
  );
}
