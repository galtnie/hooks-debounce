import React, { useState, useEffect } from "react";

const Button = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button onClick={() => setText(input)}>appear</button>
      <b>text will appear in 2 secs unless you click again</b>
      <br />
      text invoked by button click:
      <span> {text}</span>
    </div>
  );
};

// function useDebounce(value, wait) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const watcher = setTimeout(() => {
//       setDebouncedValue(value);
//     }, wait);
//     return () => {
//       clearTimeout(watcher);
//     };
//   }, [value, wait]);

//   return(debouncedValue);
// }

export default Button;
