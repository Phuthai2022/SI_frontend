//1. Import page up here
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define Route here */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
