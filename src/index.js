import React from "react";
import ReactDOM from "react-dom";
import Button from "./debouncer";

function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
