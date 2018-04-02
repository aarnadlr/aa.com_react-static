import React from "react";
import Tilt from "react-tilt";
import projects from "./projects.js";
import styled from "styled-components";
// import './css/entry.css';
const uuidv1 = require("uuid/v1");

const Div = styled.div`
  width: 400px;
  border-radius: 9px;
`;
// --------- END STYLED-COMPONENTS ---------

const Ww4 = () => {
  return (


      <div className="flex flex-wrap justify-center">
        {projects.map(function(project) {
          return (
            <Div className="" key={uuidv1()}>
              <Tilt
                className="Tilt"
                options={{ reverse: true, max: 25, scale: 1.05, speed: 900 }}
              >
                <div className="Tilt-inner" key={uuidv1()}>
                  <div className="ma2 bg-white">
                    <a href={project.link}>
                      <img src={project.image} alt="alt" className="w400" />

                      <div className="textContainer pa4">
                        <p id="title" className="f3 mt1 mb0 fw6">
                          {project.title}
                        </p>
                        <p id="desc" className="f7 mid-gray lh-copy2 mt0">
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
  );
};

export default Ww4;