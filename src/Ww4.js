import React from "react";
import Tilt from "react-tilt";
import "./css/entry.css";
import projects from "./projects.js";
import styled from "styled-components";
const uuidv1 = require("uuid/v1");

const Div = styled.div`
  width: 400px;
  border-radius: 9px;
`;
// --------- END STYLED-COMPONENTS ---------

const Ww4 = () => {
  return (
    <div className="">

      
    <div id='topSection' className="flex flex-column center white mt7 mb5">
      <img id='profile-pic' className='center mb3' src="https://ww3.aaronadler.com/assets/img/ww3-aa/profile-pic.jpg" />
      <p className='f2c tc'>Aaron Adler</p>
      <p className='f5 lh-copy3b'>Hi there. I’m a UI designer / Front-end developer in NYC. I’ve worked on projects for Facebook, Google, IBM, R/GA, Droga5, BBH New York and others. My work has been recognized by Cannes, AICP, the Art Directors Club, Clios, Communication Arts, Archive, Adweek, and the New York Times. My focus is on  UI design ,  React ,  javascript  and coded animation.</p>
    </div>


    <div className="flex flex-wrap justify-center">
      {projects.map(function(project) {
        return (
          <Div className="" key={uuidv1()}>
            <Tilt className="Tilt" options={{ reverse: true, max: 25, scale: 1.05, speed: 900 }}>
              <div className="Tilt-inner" key={uuidv1()}>
                <div className="ma2 bg-white">
                  <a href={project.link}>
                    <img src={project.image} alt="alt" className="w400" />

                    <div className="textContainer pa4">
                      <p id="title" className="f3">
                        {project.title}
                      </p>
                      <p id="desc" className="f7 mid-gray lh-copy2">
                        {project.desc}
                      </p>
                      <p first="" className="tag bg-blue5">
                        {project.tag1}
                      </p>
                      <p className="tag bg-blue6">{project.tag2}</p>
                      <p className="tag bg-indigo7">{project.tag3}</p>
                      <p className="tag bg-violet7">{project.tag4}</p>
                    </div>
                  </a>
                </div>
              </div>
            </Tilt>
          </Div>
        );
      })}
    </div>


    </div>
  );
};

export default Ww4;
