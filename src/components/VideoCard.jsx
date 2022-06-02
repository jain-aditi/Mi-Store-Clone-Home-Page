import React from "react";
import "../styles/VideoCard.css";

const playButton = (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="M16 37.85V9.85L38 23.85Z" />
  </svg>
);

const VideoCard = ({ name, image }) => {
  return (
    <div className="video-card" style={{ backgroundImage: `url(${image})` }}>
      <a href="#">{playButton}</a>
      <p>{name}</p>
    </div>
  );
};

export default VideoCard;
