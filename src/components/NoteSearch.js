import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      keyword: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
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

// function NoteSearch({ onSearch }) {
//   return (
//     <div className="note-search">
//       <input type="text" placeholder="Cari catatan ..." onChange={onSearch} />
//     </div>
//   );
// }

export default NoteSearch;
