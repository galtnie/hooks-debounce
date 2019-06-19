import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
