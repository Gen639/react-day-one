import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import TheHeader from "./components/TheHeader/TheHeader";

function App() {
  return (
    <div>
      <TheHeader />
      <Home />
    </div>
  );
}

export default App;
