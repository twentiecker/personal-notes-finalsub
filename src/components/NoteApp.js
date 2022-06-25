import React from "react";
import { getInitialData } from "../utils/index";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.archivedNotes = [];
    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
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
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: notes,
      };
    });

    if (this.archivedNotes.length !== 0) {
      const note = this.archivedNotes.filter((note) => note.id === id);
      this.archivedNotes.splice(this.archivedNotes.indexOf(note[0]), 1);
    }
  }

  onArchiveHandler(id) {
    const archive = this.state.notes.filter((note) => note.id === id);
    this.archivedNotes.push(archive[0]);
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState((prevState) => {
      return {
        ...prevState,
        notes: notes,
      };
    });
  }

  onUnArchiveHandler(id) {
    const note = this.archivedNotes.filter((note) => note.id === id);
    this.archivedNotes.splice(this.archivedNotes.indexOf(note[0]), 1);

    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, note[0]],
      };
    });
  }

  onSearchHandler(keyword) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchKeyword: keyword,
      };
    });
    // this.setState({ searchKeyword: keyword });
  }

  render() {
    return (
      <>
        <NoteAppHeader onSearch={this.onSearchHandler} />
        <NoteAppBody
          notes={this.state.notes}
          archivedNotes={this.archivedNotes}
          onUnArchive={this.onUnArchiveHandler}
          onAddNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onDeleteArchive={this.onDeleteArchiveHandler}
          onArchive={this.onArchiveHandler}
        />
      </>
    );
  }
}

export default NoteApp;
