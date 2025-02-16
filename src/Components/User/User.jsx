import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
const User = () => {
  const [data, setData] = useState([]);
  const [podcastData, setPodcastdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/users");
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    const fetchPodcastData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/podcast");
        setPodcastdata(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPodcastData();
  }

    , []);

    console.log(data);
    console.log(podcastData);
    function CountPodcast(userId) {
      const totalPodcast = podcastData.reduce((total, item) => {
        if (item.userId === userId) {
          return total + 1; // Increment count if userId matches
        }
        return total;
      }, 0);
      return totalPodcast;
    }

  return (
    <div className="overflow-x-auto w-full p-4">
      <table className="min-w-full  bg-purple-800 text-white">
        <thead>
          <tr className="border-b-2 border-purple-700">
            <th className="px-5 py-2 text-left">NO</th>
            <th className="px-5 py-2 text-left">Name</th>
            <th className="px-5 py-2 text-left">Email</th>
            <th className="px-5 py-2 text-left">Uploaded Podcast</th>

          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-white hover:text-black transition-all"
            >
              <td className="px-5 py-2">{index + 1}</td>
              <td className="px-5 py-2">{row.name}</td>
              <td className="px-5 py-2">{row.email}</td>
              <td className="px-5 py-2">{CountPodcast(row._id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
