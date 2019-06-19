import React, { useState } from "react";

const Button = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  const appear = () => {
    setTimeout(() => {
      setText(input);
    }, 2000);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button onClick={appear}>txt will appear in 2 secs</button>
      <br />
      <span>{text}</span>
    </div>
  );
};

export default Button;
