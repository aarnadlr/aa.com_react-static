import React from 'react';
// import styles from './TopNav.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';

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
    <span className="flex items-center icon grow2">
      <Icon className="fa fa-suitcase blue5" />
      <p className="mr4 text-shad-1">Tools</p>
    </span>
    <span className="flex items-center icon grow2">
      <Icon className="fa fa-envelope-o blue5" />
      <p className="mr4 text-shad-1">Contact</p>
    </span>
  </Container>
);



export default TopNav;
