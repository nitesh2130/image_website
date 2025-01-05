/* eslint-disable no-unused-vars */
import React from "react";

import { useState } from "react";

const navbar = ({ onSubmitData }) => {
  const [SubmittedValue, SetsubmitedValue] = useState("");
  const [InputText, SetInputText] = useState("");

  const HandelInputvalue = (event) => {
    SetInputText(event.target.value);
  };

  const HandleButtonClick = () => {
    onSubmitData(InputText);
    SetInputText("");
  };

  return (
    <div className="bg-black p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-bold ">
          <img
            className="h-12 rounded-md"
            src="https://plus.unsplash.com/premium_photo-1669648901257-8a52ec65bcf7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nbyUyMG9mJTIwdW5zcGxhc2h8ZW58MHx8MHx8fDA%3D"
            alt="img"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={InputText}
            onChange={HandelInputvalue}
            placeholder="Search..."
            className="p-2 rounded-md border border-gray-300"
          />
          <button
            onClick={HandleButtonClick}
            className="bg-white text-blue-600 px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
