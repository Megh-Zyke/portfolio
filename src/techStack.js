import React from "react";

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


function techStack() {
    return (
        <div class = "tech">
                <h3>
                    Skill Set
                </h3>

                <div class="skillSet">
                
                <div class="WebDev">
                <img src= {html} alt="Image not fond" class="skillIcon" />
                <img src= {css} alt="Image not fond" class="skillIcon" />
                <img src= {javascript} alt="Image not fond" class="skillIcon" />
                <img src= {react} alt="Image not fond" class="skillIcon" />
                <img src= {nodejs} alt="Image not fond" class="skillIcon" />
                </div>

                <div class="ML">

                <img src= {py} alt="Image not fond" class="skillIcon" />
                <img src= {pandas} alt="Image not fond" class="skillIcon" />
                <img src= {numpy} alt="Image not fond" class="skillIcon" />
                <img src= {tensorflow} alt="Image not fond" class="skillIcon" />
                
                </div>

                <div class = "app">
                <img src= {swift} alt="Image not fond" class="skillIcon" />
                <img src = {mysql} alt="Image not fond" class="skillIcon" />
                </div>

                </div>            
            
        </div>
    )
}

export default techStack