import "./App.css";
import io from "socket.io-client"
import { useState } from "react";

function App() {
  const socket = io("ws://localhost:9000");
  const [message, setMessage] = useState()
  return (
    <div
      className="App"
    >
      hello
      <input value={message} onChange={e => setMessage(e.target.value)}/>
    </div>
  );
}

export default App;
