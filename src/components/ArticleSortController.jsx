export default function ArticleSortController({ handleSort, sortedBy }) {
  const handleClick = (sortOrder) => {
    if (sortOrder === "date-latest") {
      handleSort("created_at&order=DESC");
    } else if (sortOrder === "date-oldest") {
      handleSort("created_at&order=ASC");
    } else if (sortOrder === "mostVotes") {
      handleSort("votes&order=DESC");
    } else if (sortOrder === "leastVotes") {
      handleSort("votes&order=ASC");
    }
  };

  return (
    <div className="sorting-bar">
      <label htmlFor="sort-select" id="sort-by-label">
        Sort By:
      </label>
      <button
        className={
          sortedBy === "created_at&order=DESC"
            ? "sort-button-active"
            : "sort-button"
        }
        onClick={() => {
          handleClick("date-latest");
        }}
      >
        Latest
      </button>
      <button
        className={
          sortedBy === "created_at&order=ASC"
            ? "sort-button-active"
            : "sort-button"
        }
        onClick={() => {
          handleClick("date-oldest");
        }}
      >
        Oldest
      </button>
      <button
        className={
          sortedBy === "votes&order=DESC" ? "sort-button-active" : "sort-button"
        }
        onClick={() => {
          handleClick("mostVotes");
        }}
      >
        Most Votes
      </button>
      <button
        className={
          sortedBy === "votes&order=ASC" ? "sort-button-active" : "sort-button"
        }
        onClick={() => {
          handleClick("leastVotes");
        }}
      >
        Least Votes
      </button>
    </div>
  );
}
