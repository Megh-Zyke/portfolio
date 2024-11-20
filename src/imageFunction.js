import React from "react";

import img1 from "./images/1.png";

import img2 from "./images/2.png";
import img3 from "./images/3.png";

import img4 from "./images/4.png";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";

import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";

import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";

function ImageFunctions(img) {
  switch (img) {
    case "1.jpg":
      return img1;

    case "2.jpg":
      return img2;

    case "3.jpg":
      return img3;

    case "4.jpg":
      return img4;

    case "5.jpg":
      return img5;

    case "6.jpg":
      return img6;

    case "7.jpg":
      return img7;

    case "8.jpg":
      return img8;

    case "9.jpg":
      return img9;

    case "10.jpg":
      return img10;

    default:
      return "";
  }
}

export default ImageFunctions;
