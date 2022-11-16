import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Nav from './Components/Nav';

import './App.css';


function App() {
  return (
    <div className="App">
   <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
    </Routes>
   </Router>
     
    </div>
  );
}

export default App;
