import React, { useEffect } from "react";
import { fetchVideos } from "../api/fetch";
import Search from "./Search";
import Thumbnail from "./Thumbnail";
// import "./Nav.css";
// import "../App.css";
import "./Home.css";

const Home = ({
  videos,
  setVideos,
  searchBar,
  setSearchBar,
  openModal,
  setOpenModal,
}) => {
  const pillLinks = [
    "Reactjs",
    "Programing",
    "Hindi music",
    "Games",
    "JavaScript",
    "AI",
    "Documentaries",
    "Calesthenics",
    "Lo-fi",
    "Biryani",
    "The Hot 100",
  ];

  return (
    <div className="home-div">
      <div className="pill-content">
        {pillLinks.map((pill, i) => (
          <button className="pillbtn"
            key={i}
            onClick={() =>
              fetchVideos(pill, setVideos, setSearchBar, setOpenModal)
            }
          >
            {pill}
          </button>
        ))}
      </div>
      <div>
        <Search
          setVideos={setVideos}
          setSearchBar={setSearchBar}
          searchBar={searchBar}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
      {videos.length === 0 ? (
        <div className="search-message">
          <h1>Videos For Your Entertainment, One Click Away!</h1>
          <h3>No search results yet! Please submit a search</h3>
          <img
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Cat_Laptop_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif/768px-Cat_Laptop_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif"
            src="https://i.gifer.com/7VA.gif"
            alt="searchimg"
          />
        </div>

        
      ) : (
        <Thumbnail videos={videos} />
      )}
    </div>
  );
};

export default Home;
