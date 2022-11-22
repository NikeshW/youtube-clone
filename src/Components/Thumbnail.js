import React from "react";
import { Link } from "react-router-dom";

const Thumbnail = ({ videos }) => {
  return (
    <div>
      {videos.map((video, id) => {
        return (
          <div key={id}>
             <Link to={`/video?id=${video.id.videoId}`}> 
             <img
              className="snowimg"
              src={video.snippet.thumbnails.medium.url}
              alt={video.name}
            />
            <h4>{video.snippet.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Thumbnail;
