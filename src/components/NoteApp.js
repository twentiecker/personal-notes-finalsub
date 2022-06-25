import React from "react";
import { getInitialData } from "../utils/index";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.archivedNotes = [];
    this.searchedNotes = [];
    this.searchedarchivedNotes = [];
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
    if (
      title.includes(this.state.searchKeyword) &&
      this.state.searchKeyword != ""
    ) {
      this.searchedNotes.push({
        id: +new Date(),
        title,
        body,
        createdAt: new Date(),
        archived: false,
      });
    }
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

    const searchArchive = this.searchedNotes.filter((note) => note.id === id);
    this.searchedNotes.splice(this.searchedNotes.indexOf(searchArchive[0]), 1);
    this.searchedarchivedNotes.push(searchArchive[0]);
  }

  onUnArchiveHandler(id) {
    const note = this.archivedNotes.filter((note) => note.id === id);
    this.archivedNotes.splice(this.archivedNotes.indexOf(note[0]), 1);

    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, note[0]],
      };
    });

    const searchNote = this.searchedarchivedNotes.filter(
      (note) => note.id === id
    );
    this.searchedarchivedNotes.splice(
      this.searchedarchivedNotes.indexOf(searchNote[0]),
      1
    );
    this.searchedNotes.push(searchNote[0]);
  }

  onSearchHandler(keyword) {
    this.searchedNotes = [];
    this.searchedarchivedNotes = [];

    for (const note of [...this.state.notes]) {
      if (note.title.toLowerCase().includes(keyword.toLowerCase())) {
        this.searchedNotes.push(note);
      }
    }

    for (const note of [...this.archivedNotes]) {
      if (note.title.toLowerCase().includes(keyword.toLowerCase())) {
        this.searchedarchivedNotes.push(note);
      }
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        searchKeyword: keyword,
      };
    });
  }

  render() {
    return (
      <>
        <NoteAppHeader onSearch={this.onSearchHandler} />
        {this.state.searchKeyword ? (
          <NoteAppBody
            notes={this.searchedNotes}
            archivedNotes={this.searchedarchivedNotes}
            onUnArchive={this.onUnArchiveHandler}
            onAddNote={this.onAddNoteHandler}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        ) : (
          <NoteAppBody
            notes={this.state.notes}
            archivedNotes={this.archivedNotes}
            onUnArchive={this.onUnArchiveHandler}
            onAddNote={this.onAddNoteHandler}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        )}
      </>
    );
  }
}

export default NoteApp;
