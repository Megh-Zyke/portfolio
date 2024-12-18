import React from "react";
import "./css files/projectModule.css";
import projectFunction from "./projectFunction";
import ImageFunction from "./imageFunction";

function ProjectModule2(data) {
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
    <div class="project animate__animated animate__fadeInUp">
      <div class="project-info">
        <h3>{data.title}</h3>

        <p>{data.description}</p>

        <p className="tech-stack">{stacks}</p>
        <div class="techUsed">
          <div class="tech-used">
            <p> {techImages}</p>
          </div>
        </div>
      </div>

      <div class="project-image">
        <a href={data.link}>
          <img src={ImageFunction(data.image)} alt={data.image} />
        </a>
      </div>
    </div>
  );
}

export default ProjectModule2;
