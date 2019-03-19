import { ToDo } from "src/basic/toDo";
import React from "react";
import ReactDOM from "react-dom";

{
  const root = document.querySelector("#app-root");

  ReactDOM.render(
    <div>
      <ToDo />
    </div>,
    root
  );
}

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept();
  }
}
