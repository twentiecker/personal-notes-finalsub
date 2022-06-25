import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    // init state
    this.state = {
      keyword: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.props.onSearch(event.target.value);
    this.setState(() => {
      return {
        keyword: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={this.state.keyword}
          onChange={this.onSearchChangeEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
