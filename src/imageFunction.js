import React from "react"

import img1 from "./images/1.png"

import img2 from "./images/2.png"
import img3 from "./images/3.png"

import img4 from "./images/4.png"
import img5 from "./images/5.jpg"

function ImageFunctions(img){

    switch(img) {
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

        default:
            return "";
    }

}

export default ImageFunctions;