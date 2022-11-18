import React, { useEffect } from "react";
import Search from "./Search";
import Thumbnail from "./Thumbnail";
import "./Nav.css"

const Home = ({ videos, setVideos }) => {
//   useEffect(() => {
//     console.log(videos);
//   }, [videos]);

  return (
    <>
      <div>
        <Search setVideos={setVideos} />
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
    </>
  );
};

export default Home;
