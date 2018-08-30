import React from "react";
// import Tilt from "react-tilt";
import projects from "../projects";
import styled from "styled-components";
import './Cards.css';
import '../css/entry.css';
const uuidv1 = require("uuid/v1");

const Container = styled.div`
  /* transform: scale(1); */

`
const Div = styled.div`
  width: 430px;
  transition: all .3s ease;
  /* -moz-transition: scale .3s ease; */
  /* -webkit-transition: scale .3s ease; */
  &:hover{
    transform:translateY(-10px);
  }
`;

const Div2 = styled.div`
  /* flex: 1; */
`;

const Completed = styled.p`
  border: 1px solid blue;
  margin-top: 2.7rem;

`;


const Img = styled.img`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`
// --------- END STYLED-COMPONENTS ---------

const Cards = () => {
  return (


      <Container className="flex flex-wrap justify-center">
        {projects.map(function(project) {
          return (


            <Div key={uuidv1()}>
              {/* <Tilt
                className="Tilt"
                options={{ reverse: true, max: 12, scale: 1.03, speed: 900 }}
              > */}
                  <div className="br2 ma2 bg-white">
                    <a target="_blank" href={project.link}>

                      <Img  src={project.image} alt="alt" className="" />

                      <Div2 className="textContainer pa4b lh-copy3">
                        <p id="title" className="f3c mt1 mb0 fw6 lh-title">
                          {project.title}
                        </p>
                        <p id="desc" className="f6b blue7  mt3 mb4 space">
                          {project.desc}
                        </p>

                        <p id="" className="projectRole f6 mt1 blue7 mb2 fw6">
                          My project role :
                        </p>

                        <ul style={{listStyleType:'circle'}} className='f6b blue7'>


                          <li className='mt3'>{project.role1?project.role1:project.role}</li>

                          {project.role2?
                          <li className='mt3'>{project.role2}</li>
                          :null}

                          {project.role3?
                          <li className='mt3'>{project.role3}</li>
                          :null}

                          {project.role4?
                          <li className='mt3'>{project.role4}</li>
                          :null}
                          
                          {project.role5?
                          <li className='mt3'>{project.role5}</li>
                          :null}

                          
                        </ul>

                        <p id="" className="f6 mt4 mb0 blue7 fw6">
                          Project stack:
                        </p>
                        <p first="" className="mt0 tag bg-blue5">{project.tag1}</p>
                        <p         className="mt0 tag bg-blue6">{project.tag2}</p>
                        <p         className="mt0 tag bg-indigo7">{project.tag3}</p>
                        <p         className="mt0 tag bg-violet7">{project.tag4}</p>
                        
                        <Completed id="" className="dib f7 blue7 ph3 pv2">
                          Completed: &nbsp;<span className="fw7">{project.year}</span>
                        </Completed>

                      </Div2>
                    </a>
                  </div>
              {/* </Tilt> */}
            </Div>


          );
        })}
      </Container>
  );
};

export default Cards;
