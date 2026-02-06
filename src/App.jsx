import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EImzaPage from "./pages/EImzaPage/EImzaPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/e-imza" element={<EImzaPage />} />
    </Routes>
  );
}

export default App;
