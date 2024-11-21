import React from "react";
import LazyLoad from "react-lazyload";
import "./App.css";
import "animate.css";
import ProjectModule2 from "./projectModule2";
import ProjectModule from "./projectModule";
import ProjectData from "./projectData";
import { useNavigate } from "react-router-dom";

import "./css files/projects.css";

function AllProjects() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/portfolio");
  };
  return (
    <div className="Container">
      <header className="AllProjects-header">
        <h1 className="animate__animated animate__fadeInUp">All Projects</h1>
      </header>

      <div>
        {ProjectData.map((project, index) => (
          <LazyLoad key={index} height={200} offset={100} once>
            {index % 2 === 0 ? (
              <ProjectModule {...project} />
            ) : (
              <ProjectModule2 {...project} />
            )}
          </LazyLoad>
        ))}
      </div>

      <div className="go-back">
        <button className="view-all-button" onClick={handleClick}>
          Click here to go back
        </button>
      </div>
    </div>
  );
}

export default AllProjects;
