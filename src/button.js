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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}
    >
      <input
        type="text"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button onClick={() => setClick(click + 1)}>appear</button>
      <p>
        <b>
          when you click the button the text will appear in 2 secs unless you
          click again
        </b>
      </p>
      <p>text invoked by button click:</p>
      <span> {text1}</span>
      <p>text invoked by typing stop:</p>
      <span> {text2} </span>
    </div>
  );
};

function useDebounce1(value1, wait1, click) {
  const [debouncedValue1, setDebouncedValue1] = useState(value1);

  useEffect(() => {
    const watcher1 = setTimeout(() => {
      setDebouncedValue1(value1);
    }, wait1);
    return () => {
      clearTimeout(watcher1);
    };
  }, [value1, wait1, click]);

  return debouncedValue1;
}

function useDebounce2(value2, wait2) {
  const [debouncedValue2, setDebouncedValue2] = useState(value2);

  useEffect(() => {
    const watcher2 = setTimeout(() => {
      setDebouncedValue2(value2);
    }, wait2);
    return () => {
      clearTimeout(watcher2);
    };
  }, [value2, wait2]);

  return debouncedValue2;
}

export default Button;
