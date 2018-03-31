import React from 'react';
import '../css/entry.css';
import projects from "./projects.js";
import styled from "styled-components";
const uuidv1 = require('uuid/v1');


const Div = styled.div`
  font-family: 'Poppins';
`

const Udemy = ()=>{
  return(


  <Div className='red'>
    {projects.map(function(project){
      return(
        <Div key={uuidv1()}>
          <img src={project.image} className='w400' alt='alt'/>
          <p className='f3 blue'>{project.title}</p>
          <p className='f7 black'>{project.desc}</p>
        </Div> 
      )  
    })}

  </Div>

  )
}









export default Udemy;