import React from 'react';
import project1 from "../Assets/img/project-item-01.jpg";
import project2 from "../Assets/img/project-item-02.jpg";
import project3 from "../Assets/img/project-item-03.jpg";
import project4 from "../Assets/img/project-item-04.jpg";

const Projects = () =>{
    return(
        <li className="selected animated fadeInRight">
<div className="heading">
  <h1>Our projects</h1>
  <span>Here you can check our recent projects</span> 
</div>
<div className="cd-half-width fourth-slide">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="content fourth-content">
          <div className="row">
            <div className="col-md-3 project-item">
              <img src={project1}/>
            </div>
            <div className="col-md-3 project-item">
              <img src={project2}/>
            </div>
            <div className="col-md-3 project-item">
             <img src={project3}/>
            </div>
            <div className="col-md-3 project-item">
              <img src={project4}/>
            </div>
         
          </div>
        </div>
      </div>
    </div>                  
  </div>
</div>
</li>
    );
}

export default Projects;