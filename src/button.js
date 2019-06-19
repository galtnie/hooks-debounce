import React, { useState, useEffect } from "react";

const Button = () => {
  const [input, setInput] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [click, setClick] = useState(0);

  const finalValue1 = useDebounce1(input, 2000, click);

  useEffect(() => {
    if (click > 0) {
      setText1(finalValue1);
    } else {
      setText1("");
    }
  }, [finalValue1, click]);

  const finalValue2 = useDebounce2(input, 2000);

  useEffect(() => {
    if (finalValue2) {
      setText2(finalValue2);
    } else {
      setText2("");
    }
  }, [finalValue2]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button onClick={() => setClick(click + 1)}>appear</button>
      <b>
        when you click the button the text will appear in a sec unless you click
        again
      </b>
      <br />
      text invoked by button click:
      <span> {text1}</span>
      <br />
      text invoked by typing stop:
      <span> {text2} </span>
    </div>
  );
};

function useDebounce1(value, wait, click) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const watcher = setTimeout(() => {
      setDebouncedValue(value);
    }, wait);
    return () => {
      clearTimeout(watcher);
    };
  }, [value, wait, click]);

  return debouncedValue;
}

function useDebounce2(value, wait) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const watcher = setTimeout(() => {
      setDebouncedValue(value);
    }, wait);
    return () => {
      clearTimeout(watcher);
    };
  }, [value, wait]);

  return debouncedValue;
}

export default Button;
