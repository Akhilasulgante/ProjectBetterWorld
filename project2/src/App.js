import "./App.css";
import NavBar from "../src/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Stories from "../src/Pages/Stories";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stories" element={<Stories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
