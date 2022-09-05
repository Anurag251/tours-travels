import React, { createContext } from "react";
import { useState } from "react";

import slideImage1 from "../assets/images/banner1.png";

export const SliderContext = createContext();

const SliderProvider = ({ children }) => {
  const [datas, setDatas] = useState([
    {
      id: 1,
      image: slideImage1,
    },

    {
      id: 2,
      image: slideImage1,
    },

    {
      id: 3,
      image: slideImage1,
    },

    {
      id: 4,
      image: slideImage1,
    },
  ]);
  return (
    <SliderContext.Provider value={[datas, setDatas]}></SliderContext.Provider>
  );
};

export default SliderProvider;
