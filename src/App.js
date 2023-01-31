import logo from "./logo.svg";
import "./App.css";
import { useState, setState } from "react";
import TypingComponent from "./TypingComponent";

function App() {
  const [message, setMessage] = useState("");
  const handleMessageChange = (event) => {
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
      <TypingComponent message={message} />
    </div>
  );
}

export default App;
