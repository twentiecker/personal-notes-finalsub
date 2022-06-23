import React from "react";

function NoteItemAction({ id, onDelete, onFilter }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onFilter(id)}
      >
        Arsipkan
      </button>
    </div>
  );
}

export default NoteItemAction;
