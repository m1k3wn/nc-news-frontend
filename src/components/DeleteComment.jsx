export default function DeleteComment({ onDelete }) {
  const handleDelete = (event) => {
    event.preventDefault();
    onDelete();
  };

  return (
    <div className="delete-comment-component">
      <button id="delete-comment-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
