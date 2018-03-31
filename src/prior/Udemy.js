import React from 'react';
import './css/entry.css';
import projects from "./projects.js";
import styled from "styled-components";

const projFunc = project =>`
return project.title
`

const Div = styled.div`
  font-family: 'Poppins';
`

const Udemy = ()=>{
  return(


  <Div className='red'>
    {projects.map(function(project){
      return(
        <Div>
          <img src={project.image} className='w400'/>
          <p className='f3 blue'>{project.title}</p>
          <p className='f7 black'>{project.desc}</p>
        </Div> 
      )  
    })}

  </Div>

  )
}









export default Udemy;