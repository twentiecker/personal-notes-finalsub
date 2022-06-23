import React from "react";

function NoteItemContent({ title, createdAt, body }) {
  const dateTime = new Date(createdAt).toLocaleDateString("id-id", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{dateTime}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemContent;
