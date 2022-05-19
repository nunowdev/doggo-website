import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Select from "./pages/Select";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/select" element={<Select />}></Route>
        <Route path="/gallery"></Route>
      </Routes>
    </Router>
  );
}

export default App;
