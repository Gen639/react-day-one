import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PersonF from "./components/PersonF/PersonF";
import PersonC from "./components/PersonC/PersonC";

function App() {
  return (
    <div>
      <h2>Functional Component:</h2>
      <PersonF name="Jon" surname="Doe" age="50" />
      <h2>Class Component</h2>
      <PersonC name="Jon" surname="Doe" age="50" />
    </div>
  );
}

export default App;
