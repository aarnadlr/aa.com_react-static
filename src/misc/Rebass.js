import React from "react";
// import ReactDOM from "react-dom";
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
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import projects from "./projects";

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 40px; background: #eee;}
`;




const CardHover = Card.extend`
  transition: all 0.4s ease;
  padding:0;
  &:hover {
    opacity: 0.5;
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  height: 200px;
`



export default () => {
  return (
    <Provider>
      <Heading>Hello</Heading>

<Flex flexWrap='wrap'>
  
      {projects.map(function(project) {
      
            return (
              <Box width='400px'>
                <CardHover>
                  <Image src={project.image} />
                  <Box p={20}>
                    <Subhead>{project.title}</Subhead>
                    <Small>{project.desc}</Small>
                  </Box>
                </CardHover>
              </Box>
            );
  
      })}

</Flex>
      <Text
        textAlign="center"
        fontWeight="bold"
        children="bluegreen"
        color={["blue", "green"]}
      />

      {/* <Heading fontSize={1} children='1Top-level heading' />
        <Heading fontSize={2} children='2Top-level heading' />
        <Heading fontSize={7} children='7Top-level heading' />
        <Heading fontSize={8} children='8Top-level heading' />
        <Heading fontSize={9} children='9Top-level heading' /> */}

      <Row>
        <Column bg="red" width={1}>
          111
        </Column>
        <Column bg="orange" width={1 / 2}>
          222
        </Column>
        <Column bg="yellow" width={1 / 4}>
          333
        </Column>
        <Column bg="lavender" width={1 / 4}>
          444
        </Column>
        <Column bg="cyan" width={1}>
          555
        </Column>
        <Column bg="blue" width={1}>
          666
        </Column>
      </Row>

      <Flex flexWrap="wrap" className="bold">
        <Box bg="red" px={2} py={1} width={[1, 1 / 2, 1 / 4, 1 / 8]} />

        <Box bg="lime" px={2} py={1} width={[1, 1 / 2, 1 / 4, 1 / 8]} />

        <Box bg="purple" px={2} py={1} width={[1, 1 / 2, 1 / 4, 1 / 8]} />

        <Box bg="lavender" px={2} py={1} width={[1, 1 / 2, 1 / 4, 1 / 8]} />
      </Flex>
    </Provider>
  );
};
