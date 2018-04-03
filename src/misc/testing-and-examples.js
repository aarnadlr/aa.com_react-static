import React from "react";
import projects from "./projects.js";
import styled from "styled-components";
import tachyons from "tachyons";

import { injectGlobal } from 'styled-components';
import { ThemeProvider } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v5/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
`;




const theme = {
  main: 'white'
};



const Container = styled.div`
  background: navy;
  margin: 0;
  color: ${props => props.theme.main};
`;


const Img = styled.img`
  width: 400px;
  height: 200px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2rem;
`;

const Desc = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;

var i=0;

export default () => {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      {projects.map( project => {
        for (let i = 0; i < array.length; i++) {
          return (
            <div key={project.key}>
              <Img src={project.image} alt="" />
              <Title className='bg-light-red tracked tc'>{project.title}</Title>
              <Desc>{project.desc}</Desc>
            </div>
          );
      }
      })}
    </Container>
    </ThemeProvider>

  );
};







 <TopHalf>
        {projects.map( project => {
          return (
            <div key={project.key}>
              
              
            </div>
          );
        })}
      </TopHalf>




      <BottomHalf>
        {projects.map( project => {
          return (
            <div key={project.key}>
            {/* <div key={project.key}> */}
              {/* <Title className='bg-light-red tracked tc'>{project.title}</Title> */}
              {/* <Desc>{project.desc}</Desc> */}
            </div>
          );
        })}
      </BottomHalf>





import React from 'react';
import Tilt from 'react-tilt';
import './css/entry.css';
import projects from "./projects.js";
import styled from "styled-components";
const uuidv1 = require('uuid/v1');
 



const Div = styled.div`
  font-family: 'Poppins';
  /* background: white; */
  width:400px;
  /* height: 500px; */
  border-radius:9px;
`
// --------- END STYLED-COMPONENTS ---------


const Ww4 = ()=>{
  return(
  <Div className=''>
    {projects.map(function(project){
      return(

        <div className="Tilt-inner" key={uuidv1()}>
                  <Div key={uuidv1()}>
                  <div className='ma2 bg-white'>
                        <a href={project.link}>
                            <img src={project.image} alt='alt' className='w400'/>

                            <div className="textContainer pa4">
                              <p id='title' className='f3'>{project.title}</p>
                              <p id='desc' className='f7 mid-gray lh-copy2'>{project.desc}</p>
                              <p first='' className='tag bg-blue5'>{project.tag1}</p>
                              <p className='tag bg-blue6'>{project.tag2}</p>
                              <p className='tag bg-indigo7'>{project.tag3}</p>
                              <p className='tag bg-violet7'>{project.tag4}</p>
                            </div>
                        </a>
                        </div>
                        </Div>
        </div>
    )
  }
  </Div>



export default Ww4;