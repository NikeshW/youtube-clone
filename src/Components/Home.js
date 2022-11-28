import React, { useEffect } from "react";
import { fetchVideos } from "../api/fetch";
import Search from "./Search";
import Thumbnail from "./Thumbnail";
// import "./Nav.css";
// import "../App.css";
import "./Home.css";
import BGvideo from "./BGvideo";
// import cityscape from "../Videobg/cityscape.mp4"

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
      <BGvideo/>
        {/* <video src={cityscape} autoPlay loop muted/>
        <div className="content">
          <h1>welcome home</h1>
        </div> */}
      <div className="pill-content">
        {pillLinks.map((pill, i) => (
         <ul>
          <li>
            <button className="pillbtn"
            key={i}
            onClick={() =>
              fetchVideos(pill, setVideos, setSearchBar, setOpenModal)
            }
          >
            {pill}
          </button>
          </li>
         </ul>
         
        ))}
      </div>
      {/* <div>
        <Search
          setVideos={setVideos}
          setSearchBar={setSearchBar}
          searchBar={searchBar}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div> */}
      {videos.length === 0 ? (
        <div className="search-message">
          <h1>Videos For Your Entertainment, One Click Away!</h1>
          <div>
        <Search
          setVideos={setVideos}
          setSearchBar={setSearchBar}
          searchBar={searchBar}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
          <h3>No search results yet! Please submit a search</h3>
        </div>     
      ) : (
        <Thumbnail videos={videos} />
      )}
    </div>
  );
};

export default Home;
