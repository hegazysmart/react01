import React, { useState } from "react";
import Slider from "../components/Slider";
const SliderImages = () => {
  const [sliders] = useState([
    {
      img: "https://via.placeholder.com/150C/O",
    },
    {
      img: "https://via.placeholder.com/100C/O",
    },
    {
      img: "https://via.placeholder.com/150C/O",
    },
    {
      img: "https://via.placeholder.com/180C/O",
    },
    {
      img: "https://via.placeholder.com/190C/O",
    },
  ]);
  return <Slider sliders={sliders} />;
};

export default SliderImages;
