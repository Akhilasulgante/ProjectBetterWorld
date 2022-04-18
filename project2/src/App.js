import "./App.css";
import NavBar from "../src/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Stories from "../src/Pages/Stories";
import CauseSelect from "./Pages/CauseSelect";
import { useState } from "react";
import CreateStory from "./Model/CreateStory";

/**
 * This component defines all the routes of the site
 *
 * @return  object
 */
function App() {
  const [btnId, setBtnId] = useState("3");
  const story = new CreateStory();

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setBtnId={setBtnId} />} />
        <Route path="/Stories" element={<Stories story={story} />} />
        <Route path="/CauseSelect" element={<CauseSelect btnId={btnId} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
