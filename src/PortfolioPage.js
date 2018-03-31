import React from "react";
import ReactDOM from "react-dom";
import { Provider, Heading } from "rebass";
import {
  Flex,
  Row,
  Column,
  Text,
  Card,
  Box,
  Subhead,
  Small
} from "rebass";
import { injectGlobal, ThemeProvider } from "styled-components";
import styled from "styled-components";
import projects from "./projects";
import ww4Theme from './theme';
// import tachyons from 'tachyons'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 40px; background: #eee;}
`;




const CardHover = Card.extend`
  transition: all 0.4s ease;
  padding: 0;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  height: 200px;
`

// export default () => {
const PortfolioPage = props => (
  <ThemeProvider theme={ww4Theme}>
    <Flex>
      <Box className='' >
      <div></div>
      </Box>
      <Box>
      Box 2
      </Box>
    </Flex>
  </ThemeProvider>
);

export default PortfolioPage;