//1. Import page up here
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import LoginAs from "./pages/loginas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define Route here */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/loginas" element={<LoginAs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
