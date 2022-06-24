import React from "react";
import NoteInputTitleCharLimit from "./NoteInputTitleCharLimit";

let temp = 0;
class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // init state
    this.state = {
      title: "",
      body: "",
      count: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      console.log("temp I: " + temp);
      console.log(event.target.value.length);

      if (event.target.value.length > 50) {
        alert("Maksimal karakter adalah 50");
        return;
      }

      if (temp < event.target.value.length) {
        temp = event.target.value.length;
        console.log("temp II: " + temp);
        return {
          ...prevState,
          title: event.target.value,
          count: prevState.count - 1,
        };
      } else {
        temp = event.target.value.length;
        return {
          ...prevState,
          title: event.target.value,
          count: prevState.count + 1,
        };
      }

      // return {
      //   ...prevState,
      //   title: event.target.value,
      //   count: prevState.count - 1,
      // };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAddNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <NoteInputTitleCharLimit count={this.state.count} />
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
