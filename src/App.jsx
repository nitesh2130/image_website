//import { useState } from 'react'

import { useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/navbar";

const App = () => {
  const [NavData, SetNavData] = useState("");

  const handleData = (data) => {
    SetNavData(data);
    console.log(NavData);
  };

  return (
    <>
      <Navbar onSubmitData={handleData} />
      <Body imgKeyword={NavData} />
    </>
  );
};

export default App;
