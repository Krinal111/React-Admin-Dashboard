import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import fileExtension from "file-extension";
// import Cookies from "js-cookie";
import "./Audio.css";

// const userCookie = Cookies.get("user");

const AudioCard = ({ item }) => {
//   const navigate = useNavigate();
  const formatDate = useCallback((date) => {
    return moment(date).fromNow();
  }, []);

  return (
    <div className="audio_card" key={item._id} >
      {/* Display video for mp4 files */}
      {fileExtension(item.track) === 'mp4' ? (
        <div className="audio_image">
          <video
            poster={item.thumbnail}
            src={`http://localhost:4000/podcast-tracks/${decodeURIComponent(item.track.split('\\').pop().split('/').pop())}`}
            controls
            className="audio_video"
          />
          <div className="btn-overlay">
            <i
              className="fa-solid fa-play plybtn"
            //   onClick={() => navigate(`/singlepage/${encodeURIComponent(item._id)}`)}
            ></i>
          </div>
        </div>
      ) : (
        <div className="audio_image">
          <img
            src={`${item.thumbnail.replace(/"/g, "")}`}
            alt={item.title}
            className="img"
          />
          <div className="btn-overlay">
            <i
              className="fa-solid fa-play plybtn"
            //   onClick={() => navigate(`/singlepage/${encodeURIComponent(item._id)}`)}
            ></i>
          </div>
        </div>
      )}

      {/* Podcast Title and Description */}
      <div className="content">
        <h3 className="font-serif myh2">{item.title}</h3>
        <p className="audio-artist">{item.artist}</p>
        <p className="myp">1.3k &bull; {formatDate(item.date)}</p>
      </div>
    </div>
  );
};

export default AudioCard;
