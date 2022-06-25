import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  archive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction
        id={id}
        archive={archive}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteItem;
