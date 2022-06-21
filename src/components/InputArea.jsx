import React, { useState } from "react";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
