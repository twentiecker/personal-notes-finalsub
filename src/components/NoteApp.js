import React from "react";
import { getInitialData } from "../utils/index";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onFilterHandler = this.onFilterHandler.bind(this);
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
    console.log(notes);
    this.setState({ notes });
  }

  onFilterHandler(id) {
    const notes = this.state.notes.filter((note) => note.id === id);
    this.setState({ notes });
    console.log(notes);
  }

  onSearchHandler(title) {
    const notes = this.state.notes.filter((note) => note.id == 1);
    this.setState({ notes });
    console.log(notes);
  }

  render() {
    return (
      <>
        <NoteAppHeader onSearch={this.onSearchHandler} />
        <NoteAppBody
          addNote={this.onAddNoteHandler}
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onFilter={this.onFilterHandler}
        />
      </>
    );
  }
}

export default NoteApp;
