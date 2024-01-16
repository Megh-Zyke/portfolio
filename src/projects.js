import React from "react";

import ProjectModule2 from './projectModule2';
import ProjectModule from './projectModule';
import  ProjectData from './projectData';

import './css files/projects.css';


function Projects() {
    return (
        <div class = "Container">
        <div class = "Header">
        <p> <span>Projects Showcase :</span>  Web Development and Machine Learning </p>
        </div>

        <div>
        { ProjectData.map((project, index) => (
        
        index %2 == 0 ? <ProjectModule key={index} {...project} /> : <ProjectModule2 key={index} {...project} />
       ))}
        </div>
        </div>
    )
}

export default Projects;