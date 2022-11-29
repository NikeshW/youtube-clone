import React from "react";
import { fetchVideos } from "../api/fetch";
import Search from "./Search";
import Thumbnail from "./Thumbnail";
import BGvideo from "./BGvideo";
import "./Home.css";
import cityscape from "../Videobg/cityscape.mp4"



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
      <BGvideo source={cityscape}/>
     
      <div className="pill-content">
        {pillLinks.map((pill, i) => (
         <ul key={i}>
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
