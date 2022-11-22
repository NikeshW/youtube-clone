import React, { useEffect } from "react";
import { fetchVideos } from "../api/fetch";
import Search from "./Search";
import Thumbnail from "./Thumbnail";
import "./Nav.css";
import "../App.css";

const Home = ({ videos, setVideos, searchBar, setSearchBar, openModal,setOpenModal }) => {
  const pillLinks = [
    "Reactjs",
    "Programing",
    "Hindi music",
    "games",
    "Js",
    "Documentaries",
    "Calesthenics",
    "Lo-fi",
    "The Hot 100"
  ];

  return (
    <div className="home-div">
      <div className="content">
        {pillLinks.map((pill,i) => (
          <button key={i} onClick={() => fetchVideos(pill, setVideos, setSearchBar,setOpenModal)}>{pill}</button>
        ))}
        <div>
          <Search setVideos={setVideos} setSearchBar={setSearchBar} searchBar={searchBar} openModal={openModal} setOpenModal={setOpenModal}/>
        </div>
        {videos.length === 0 ? (
          <div className="search-message">
            <h3>No search results yet! Please submit a search</h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Cat_Laptop_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif/768px-Cat_Laptop_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif"
              alt="searchimg"
            />
          </div>
        ) : (
          <Thumbnail videos={videos} />
        )}
      </div>
    </div>
  );
};

export default Home;
