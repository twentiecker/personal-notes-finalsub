import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem {...note} key={note.id} />
      ))}
    </div>
  );
}

export default NotesList;
