import { useState } from "react";
import { updateVotesByArticleId } from "../api";

export default function VoteHandler({ votes, article_id }) {
  const [votesAdded, setVotesAdded] = useState(0);
  const [isError, setIsError] = useState(null);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);

  function handleClick(increment) {
    // Prevent duplicate votes
    if ((increment > 0 && hasUpVoted) || (increment < 0 && hasDownVoted)) {
      return;
    }

    let voteChange = increment;

    if (increment > 0 && hasDownVoted) {
      voteChange = 2;
    } else if (increment < 0 && hasUpVoted) {
      voteChange = -2;
    }

    setVotesAdded((currentVotesAdded) => currentVotesAdded + voteChange);

    updateVotesByArticleId(article_id, voteChange).catch((error) => {
      setIsError("Can't vote right now!");
      setVotesAdded(0);
      setTimeout(() => {
        setIsError(null);
      }, 4000);
    });

    if (increment > 0) {
      setHasUpVoted(true);
      setHasDownVoted(false);
    } else {
      setHasUpVoted(false);
      setHasDownVoted(true);
    }
  }

  return (
    <div className="article-vote-card">
      <p id="votes-count">Votes: {votes + votesAdded} </p>

      <button
        className="vote-button"
        onClick={() => {
          handleClick(1);
        }}
        disabled={hasUpVoted}
      >
        Up Vote!
      </button>
      <button
        className="vote-button"
        onClick={() => {
          handleClick(-1);
        }}
        disabled={hasDownVoted}
      >
        Down Vote!
      </button>
      {isError ? <p className="error-message">{isError}</p> : null}
    </div>
  );
}
