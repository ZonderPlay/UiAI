// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
import "./styles/index.scss";
import { Routes, Route } from 'react-router-dom';
import {HomePage} from "./pages/Home";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
