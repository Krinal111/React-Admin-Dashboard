import React, { useState, useEffect } from "react";
import axios from "axios";
import AudioCard from "./AudioCard"; // Assuming AudioCard is in the same directory
import "./Audio.css";

const PodcastDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/podcast");
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="audio-container">
      <h1 className="audio-head">Podcast</h1>
      <div className="audio-grid">
        {data.map((item) => (
          <AudioCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default PodcastDetails;
