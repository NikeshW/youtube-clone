import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Form from "./Form";

const Video = ({ videos }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");

  return (
    <div>
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
        <Form/>
      </div>
    </div>
  );
};

export default Video;
