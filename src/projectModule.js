import React from "react";
import "./css files/projectModule.css";

import projectFunction from "./projectFunction";
import ImageFunction from "./imageFunction";

function ProjectModule(data) {

  const techImages = data.tech.map((tech, index) => (
    <img key={index} src={projectFunction(tech)} alt={tech} className="tech-icon" />
  ));

  return( 
    <div className="project">

      <div className="project-image">

        <img src={ImageFunction(data.image)} alt= {data.image} />       
      </div>

      <div className="project-info">
        <h3>{data.title}</h3>
        <p>{data.description}</p>

        <div className="techUsed">
          <div><a href={data.link}><i className="fa-brands fa-github"></i></a></div>

          <div className="tech-used">
            <p>{techImages}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModule;
