import React, { useEffect } from "react";
import { fetchVideos } from "../api/fetch";
import Search from "./Search";
import Thumbnail from "./Thumbnail";
import Form from "./Form"
import "./Nav.css";
import "../App.css";

const Home = ({ videos, setVideos }) => {
  const pillLinks = [
    "music",
    "games",
    "DIY",
    "programing",
    "reactjs",
    "babies",
    "cats",
  ];

  return (
    <div className="home-div">
      <div className="content">
        {pillLinks.map((pill) => (
          <button onClick={() => fetchVideos(pill, setVideos)}>{pill}</button>
        ))}
        <div>
          <Search setVideos={setVideos} />
          <Form />
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
