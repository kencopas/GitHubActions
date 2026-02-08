import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState("loading...");

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json())
      .then((d) => setMsg(d.message))
      .catch(() => setMsg("failed to reach backend"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>React + FastAPI</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App
