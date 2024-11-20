import React from "react";
import "./css files/userImage.css";
import myImage from "./Me.jpg";

import "./css files/techStack.css";

import html from "./tech Stacks/html.png";
import css from "./tech Stacks/css.png";
import javascript from "./tech Stacks/javascript.png";
import react from "./tech Stacks/react.png";
import nodejs from "./tech Stacks/nodejs.png";

import py from "./tech Stacks/python.png";
import pandas from "./tech Stacks/pandas.png";
import numpy from "./tech Stacks/numpy.png";
import tensorflow from "./tech Stacks/tensorflow.png";

import swift from "./tech Stacks/swift.png";

import mysql from "./tech Stacks/mysql.png";

function userImage() {
  return (
    <div>
      <div className="container">
        <div className="shape mobileImg">
          <img src={myImage} alt="" className="myImage" />
        </div>
        <div className="myInfo">
          <h1 className="title">
            {" "}
            Web Developer and Machine Learning Engineer ✌️
          </h1>
          <p className="info">
            Hi 🙋‍♂️, this is Meghanand Gejjela. An undergraduate from SRM
            Institute of Science and Technology, from India.
          </p>

          <span className="links">
            <a href="https://www.linkedin.com/in/meghanand-gejjela-802406247/">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/Megh-Zyke">
              <i className="fa-brands fa-square-github"></i>
            </a>
          </span>

          <div className="skillSet">
            <div className="WebDev">
              <img src={html} alt="Image not fond" className="skillIcon" />
              <img src={css} alt="Image not fond" className="skillIcon" />
              <img
                src={javascript}
                alt="Image not fond"
                className="skillIcon"
              />
              <img src={react} alt="Image not fond" className="skillIcon" />
              <img src={nodejs} alt="Image not fond" className="skillIcon" />
            </div>

            <div className="ML">
              <img src={py} alt="Image not fond" className="skillIcon" />
              <img src={pandas} alt="Image not fond" className="skillIcon" />
              <img src={numpy} alt="Image not fond" className="skillIcon" />
              <img
                src={tensorflow}
                alt="Image not fond"
                className="skillIcon"
              />
            </div>

            <div className="app">
              <img src={swift} alt="Image not fond" className="skillIcon" />
              <img src={mysql} alt="Image not fond" className="skillIcon" />
            </div>
          </div>
        </div>
        <div className="shape laptop">
          <img src={myImage} alt="" className="myImage" />
        </div>
      </div>
    </div>
  );
}

export default userImage;
