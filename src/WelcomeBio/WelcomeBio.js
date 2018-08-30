import React from "react";
// import styles from "./WelcomeBio.css";
import styled from "styled-components";

const Paragraph = styled.p`
  font-weight:300;
`
const Img = styled.img`
  width:20px;
  height: 20px;
  border-radius: 3px;
`

const WelcomeBio = () => (
  <div className="">

    <div id="topSection" className="flex flex-column center white mt6 mb5">
      <img
        id="profile-pic"
        className="grow2 center mb3"
        src="https://ww2.aaronadler.com/images/profile-pic.jpg"
        alt='alt'
      />
      <p className="f2c tc">Aaron Adler</p>


      {/* SOCIAL ICONS UNDER NAME */}
      <div className='flex justify-center mb4'>
        <a target='_blank' rel="noopener noreferrer" href="https://dribbble.com/aarnadlr"><Img alt='github' className='grow-large-2' src='./images/AA-dribbble-icon.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.toptal.com/designers/resume/aaron-adler"><Img alt='github' className='grow-large-2 ml3' src='./images/toptal.gif' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://github.com/aarnadlr"><Img alt='github' className='grow-large-2 ml3' src='./images/github.gif' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/aaronadler/"><Img alt='github' className='grow-large-2 ml3' src='./images/linkedin.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://codepen.io/aaronadler/"><Img alt='github' className='grow-large-2 ml3' src='./images/codepen.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://medium.com/@aaronadler"><Img className='grow-large-2 ml3' src='./images/medium.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.producthunt.com/@aarnadlr"><Img className='grow-large-2 ml3' src='./images/prodhunt.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://workingnotworking.com/aarn"><Img className='grow-large-2 ml3' src='./images/wnw.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://twitter.com/aaronadler"><Img className='grow-large-2 ml3' src='./images/twitter.png' /></a>
      </div>

      <Paragraph className="f5 lh-copy4 mh3">
        Hi there. I’m a UX designer & Front-end developer in NYC. I’ve worked on
        projects for Facebook, Google, IBM, R/GA, Droga5 and
        others. My work has been recognized by Cannes, AICP, the Art Directors
        Club, Clios, Archive, Adweek, and the New York Times. My focus is on <span className="bg-green8">&nbsp;UX design&nbsp;</span> , <span className="bg-teal8">&nbsp;CSS3&nbsp;</span> , <span className="bg-cyan8">&nbsp;JavaScript ES6 + React&nbsp;</span> and <span className="bg-blue6">&nbsp;coded
        animation&nbsp;</span>.
      </Paragraph>
    </div>

  </div>
);

export default WelcomeBio;
