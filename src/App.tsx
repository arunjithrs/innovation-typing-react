import { useState } from "react";
import TypingComponent from "./TypingComponent";
import React from "react";

function App() {
  const [message, setMessage] = useState("");
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  return (
    <div className="App">
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
      ></textarea>
      <button onChange={handleMessageChange}></button>

      <br />
      {message}
      <TypingComponent data-message={message} />
    </div>
  );
}

export default App;
