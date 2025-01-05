/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */

import Like from "./Like";
const Card = ({ id, url }) => {
  const likeHandler = () => {};

  return (
    <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={url} alt="Image" />

        <Like />

        {/* <button
            onClick={likeHandler}
            className="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700"
            style={{ zIndex: 10 }}
        >
          Like
        </button> */}
      </div>
    </div>
  );
};

export default Card;
