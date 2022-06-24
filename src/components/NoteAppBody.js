import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import NotesListEmptyMessage from "./NotesListEmptyMessage";

function NoteAppBody({ onAddNote, notes, onDelete, onArchive }) {
  return (
    <div className="note-app__body">
      <NoteInput onAddNote={onAddNote} />
      <h2>Catatan Aktif</h2>
      {notes.length !== 0 ? (
        <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive} />
      ) : (
        <NotesListEmptyMessage />
      )}
      <h2>Arsip</h2>
      <NotesListEmptyMessage />
    </div>
  );
}

export default NoteAppBody;
