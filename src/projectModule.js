import React from "react";
import "./css files/projectModule.css";
import github from "./tech Stacks/github.png";

import projectFunction from "./projectFunction";
import ImageFunction from "./imageFunction";
import "animate.css";

function ProjectModule(data) {
  const techImages = data.tech.map((tech, index) => (
    <img
      key={index}
      src={projectFunction(tech)}
      alt={tech}
      className="tech-icon"
    />
  ));

  const stacks = data.stacks.map((stack, index) => <span> {stack}</span>);

  return (
    <div className="project  animate__animated animate__fadeInUp">
      <div class="project-image">
        <a href={data.link}>
          <img src={ImageFunction(data.image)} alt={data.image} />
        </a>
      </div>

      <div className="project-info">
        <h3>{data.title}</h3>
        <p>{data.description}</p>

        <p className="tech-stack">{stacks}</p>

        <div>
          <div className="tech-used">
            <p>{techImages}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModule;
