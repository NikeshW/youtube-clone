import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav";
import "./App.css";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";

function App() {
  const [videos, setVideos] = useState([])
  const [searchBar, setSearchBar] = useState("");
  const [openModal, setOpenModal] = useState(false);


  return (
    <div className="App">
      <Router>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Home videos={videos} setVideos={setVideos} searchBar={searchBar}setSearchBar={setSearchBar} openModal={openModal} setOpenModal={setOpenModal}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/video" element={<Video videos={videos}/>} />
        </Routes>
        {/* <Modal/> */}
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
