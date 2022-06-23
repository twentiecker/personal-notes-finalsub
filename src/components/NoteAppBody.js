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

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onFilterHandler = this.onFilterHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    console.log(notes);
    this.setState({ notes });
  }

  onFilterHandler(id) {
    const notes = this.state.notes.find((note) => note.id !== id);
    this.setState({ notes });
    console.log(notes);
  }

  // onSearchHandler(title) {
  //   const notes = this.state.notes.filter((note) => note.title.includes(title));
  //   this.setState({ notes });
  //   console.log(notes);
  // }

  render() {
    return (
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        {this.state.notes.length !== 0 ? (
          <NotesList
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onFilter={this.onFilterHandler}
          />
        ) : (
          <NotesListEmptyMessage />
        )}
        <h2>Arsip</h2>
        <NotesListEmptyMessage />
      </div>
    );
  }
}

export default NoteAppBody;
