import React from "react";
import "./css files/projectModule.css";

import projectFunction from "./projectFunction";
import ImageFunction from "./imageFunction";

function ProjectModule2(data) {

const techImages = data.tech.map((tech, index) => (
        <img key={index} src={projectFunction(tech)} alt={tech} className="tech-icon" />
      ));
    
  return( 

    <div class="project">


<div class = "project-info">
            <h3>{data.title}</h3>

           
            <p>{data.description}</p>
            
            <div class = "techUsed">
                <div><a href={data.link}><i class="fa-brands fa-github"></i> </a></div>


            <div class = "tech-used">
            <p> {techImages}</p>
            </div>
            </div>
            

            
        </div>


        
        <div class="project-image">
        <img src={ImageFunction(data.image)} alt= {data.image} />       
        </div>

        

    </div>
  )
}

export default ProjectModule2;