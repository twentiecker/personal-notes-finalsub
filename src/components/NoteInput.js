import React from "react";
import NoteInputTitleCharLimit from "./NoteInputTitleCharLimit";

function NoteInput() {
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form>
        <NoteInputTitleCharLimit />
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          required
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          required
        />
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}

export default NoteInput;
