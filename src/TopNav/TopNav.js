import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
import jQuery from 'jquery';
import easings from '../easings';      

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index:99;
`

const Icon = styled.i`
  position: relative;
  bottom:2px;
  margin-right: 6px;
`




const TopNav = () => (
  <Container className="white flex items-center justify-end">


      <Scrollchor  animate={{offset: 50, duration: 1200, easing: jQuery.easing.easeInOutCubic }} to="#coretools" className="">
        <a className="flex items-center icon grow2">
        <Icon className="fa fa-suitcase blue5" />
        <p className="mr4 text-shad-1">Tools</p>
        </a>
      </Scrollchor>

      <Scrollchor  animate={{offset: 0, duration: 1200, easing: jQuery.easing.easeInOutCubic }} to="#contact" className="">
        <a className="flex items-center icon grow2">
          <Icon className="fa fa-envelope-o blue5" />
          <p className="mr4 text-shad-1">Contact</p>
        </a>
      </Scrollchor>
  </Container>
);



export default TopNav;
