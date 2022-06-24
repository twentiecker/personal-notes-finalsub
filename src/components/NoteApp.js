import React from "react";
import { getInitialData } from "../utils/index";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
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
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.filter((note) => note.id === id);
    this.setState({ notes });
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
          onAddNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </>
    );
  }
}

export default NoteApp;
