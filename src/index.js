import React from "react";
import { createRoot } from "react-dom/client";
import NoteAppHeader from "./components/NoteAppHeader";
import NoteAppBody from "./components/NoteAppBody";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <NoteAppHeader />
    <NoteAppBody />
  </>
);
