/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
//import React from 'react'
import Card from "./card";
import axios from "axios";
import { useEffect, useState } from "react";
const Body = ({ imgKeyword }) => {
  const [imgData, setImgData] = useState();
  console.log(imgKeyword);
  const [page, setPage] = useState(10);

  useEffect(() => {
    if (imgKeyword && imgKeyword.trim()) {
      axios
        .get(`https://api.unsplash.com/search/photos`, {
          params: {
            query: imgKeyword,
            client_id: "hiPKe3A7XJnKA6wSzWBnWnAyhK2QmAPpBlMXXc7irAA", // Replace with your access key
            per_page: page, // Number of results per page
          },
        })
        .then((response) => {
          setImgData(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }
  }, [imgKeyword, page]);

  console.log(imgData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {imgData?.map((image) => (
        <Card key={image.id} url={image?.links?.download} />
      ))}
      <button
        onClick={() => {
          setPage((prevPage) => prevPage + 10); // Correct way to update state
        }}
        className="flex justify-center p-2 m-3 bg-orange-300 rounded-lg"
      >
        Load More
      </button>
    </div>
  );
};

export default Body;
