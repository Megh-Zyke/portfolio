import React from "react";

import ProjectModule2 from "./projectModule2";
import ProjectModule from "./projectModule";
import ProjectData from "./projectData";
import { useNavigate } from "react-router-dom";
import "./css files/projects.css";

function Projects() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };
  return (
    <div className="Container">
      <div className="Header">
        <p>
          {" "}
          <span>Projects Showcase :</span> Web Development and Machine Learning{" "}
        </p>
      </div>

      <div>
        {ProjectData.slice(0, 4).map((project, index) =>
          index % 2 == 0 ? (
            <ProjectModule key={index} {...project} />
          ) : (
            <ProjectModule2 key={index} {...project} />
          )
        )}
      </div>

      <div className="view-all-projects">
        <button className="view-all-button" onClick={handleClick}>
          Click here to view all projects
        </button>
      </div>
    </div>
  );
}

export default Projects;
