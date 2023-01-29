import React from "react";
import MyEditor from "./EditorComp";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="inner__card">
          <h1 contentEditable className="card__title">
            Add Post title
          </h1>
          <MyEditor />
        </div>
      </div>
    </div>
  );
}
