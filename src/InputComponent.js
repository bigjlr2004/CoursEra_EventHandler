import { useState } from "react";

export default function InputComponent() {
  const [inputText, setText] = useState("Type something here.");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input
        value={inputText === "" ? "Please type something here." : inputText}
        onChange={handleChange}
      />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("")}>Reset</button>
    </>
  );
}
