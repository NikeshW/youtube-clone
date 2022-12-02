import React from "react";
import { Link } from "react-router-dom";
import "./Thumbnail.css"

const Thumbnail = ({ videos, isSuggestion }) => {
  return (
    <div className="thumbnails">
      {videos && videos.map((video, id) => {
        return (
          <div classname='thumnailvids' key={id}>
             <Link to={`/video?id=${video.id.videoId}`}> 
             <img 
              className="showimg"
              src={video.snippet.thumbnails.high.url}
              alt={video.name}
            />
            </Link>
            <h4 className="thumbh4">{video.snippet.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Thumbnail;
