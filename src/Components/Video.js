import React, { useState } from "react";
import {  useSearchParams } from "react-router-dom";
import Form from "./Form";
import "./Video.css";


const Video = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");




  const [commentList, setCommentList] = useState([]);

  return (
    <div className="video">
      
      <div>
      
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      
      </div>

      <div>
        <Form commentList={commentList} setCommentList={setCommentList} />
      </div>
    </div>
  );
};

export default Video;
