import { useState } from "react";

const Card = ({ url }) => {
  const [like, setLike] = useState(false);
  const likeHandler = (url) => {
    if (!like) {
      let currentData = JSON.parse(localStorage.getItem("dataArray")) || [];
      currentData.push(url);

      // Store the updated array in localStorage using 'dataArray' as the key
      localStorage.setItem("dataArray", JSON.stringify(currentData));
    } else {
      let currentData = JSON.parse(localStorage.getItem("dataArray")) || [];
      // console.log(currentData);
      // console.log("bhai chal to rha ha ");
      // Filter out the item that matches the given id
      const updatedData = currentData.filter((item) => item.url !== url);

      // Store the updated array back to localStorage
      localStorage.setItem("dataArray", JSON.stringify(updatedData));
    }

    setLike(!like);

    // storeLike.push(id);
    // console.log(`this value is storeLike ${storeLike}`);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={url} alt="Image" />
        {/* Button Positioned on Bottom-Right */}
        <button
          onClick={() => {
            likeHandler(url);
          }}
          className="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700"
          style={{ zIndex: 10 }}
        >
          {like ? "UnLike" : "like"}
        </button>
      </div>
    </div>
  );
};

export default Card;
