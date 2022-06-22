import React from "react";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import NotesListEmptyMessage from "./NotesListEmptyMessage";

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }
  render() {
    return (
      <div className="note-app__body">
        <NoteInput />
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes} />
        <h2>Arsip</h2>
        <NotesListEmptyMessage />
      </div>
    );
  }
}

export default NoteAppBody;
