import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const greet = async () => {
    const res = await fetch(`/api/greet?name=${encodeURIComponent(name)}`);
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: 24 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
      <button onClick={greet}>Greet</button>
      <p>{message}</p>
    </div>
  );
}