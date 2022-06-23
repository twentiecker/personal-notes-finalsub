import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem {...note} key={note.id} id={note.id} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NotesList;
