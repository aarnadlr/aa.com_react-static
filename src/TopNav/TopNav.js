import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
// import jQuery from 'jquery';
// import '../easings';      

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

const easeInOutQuart = function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
  return -c/2 * ((t-=2)*t*t*t - 2) + b;
}



const TopNav = () => (
  <Container className="white flex items-center justify-end">


      <Scrollchor  animate={{offset: 50, duration: 2000, easing: easeInOutQuart }} to="#coretools" className="">
        <div className="flex items-center icon grow2">
        <Icon className="fa fa-suitcase blue5" />
        <p className="mr4 text-shad-1">Tools</p>
        </div>
      </Scrollchor>

      <Scrollchor  animate={{offset: -350, duration: 1600, easing: easeInOutQuart }} to="#contact" className="">
        <div className="flex items-center icon grow2">
          <Icon className="fa fa-envelope-o blue5" />
          <p className="mr4 text-shad-1">Contact</p>
        </div>
      </Scrollchor>
  </Container>
);



export default TopNav;
