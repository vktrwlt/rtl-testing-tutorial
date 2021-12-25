import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState(true);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: color ? "red" : "blue" }}
        onClick={() => setColor(!color)}
        disabled={disabled}
      >
        change to {color ? "blue" : "red"}
      </button>
      <input
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
        id="enable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
      />
    </div>
  );
}

export default App;
