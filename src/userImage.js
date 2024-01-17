import React from 'react';
import './css files/userImage.css';
import myImage from './Me.jpg';

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

        <div class="container">


        <div class="shape mobileImg">
            <img src= {myImage} alt=""  class = "myImage" />  
        </div>
            <div class = "myInfo">
            <h1 class = "title"> Web Developer and Machine Learning Engineer ✌️</h1>
            <p class = "info">
                Hi 🙋‍♂️, this is Meghanand Gejjela. An undergraduate from SRM Institute of Science and Technology, from India.
            </p>

            <span class = "links">
                <a href="https://www.linkedin.com/in/meghanand-gejjela-802406247/">
                     <i class="fa-brands fa-linkedin"></i> 
                </a>
                  
                <a href="https://github.com/Megh-Zyke"> 
                    <i class="fa-brands fa-square-github"></i> 
                </a>
                
            
            </span>

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
  		<div class="shape laptop">
            <img src= {myImage} alt=""  class = "myImage" />  
        </div>
		</div>
    

        

       
      
        </div>
    )
}

export default userImage