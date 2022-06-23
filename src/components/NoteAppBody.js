import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import NotesListEmptyMessage from "./NotesListEmptyMessage";

function NoteAppBody({ addNote, notes, onDelete, onFilter }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      {notes.length !== 0 ? (
        <NotesList notes={notes} onDelete={onDelete} onFilter={onFilter} />
      ) : (
        <NotesListEmptyMessage />
      )}
      <h2>Arsip</h2>
      <NotesListEmptyMessage />
    </div>
  );
}

export default NoteAppBody;
