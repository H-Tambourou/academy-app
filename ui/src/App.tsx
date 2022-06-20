import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./Responsive.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Courses" element={<Courses/>} />
      </Routes>
    </div>
  );
}

export default App;
