import React from "react";
import styled from "styled-components";
import peeppo from "../assets/images/PEEPPO.png";
import { Title } from "./AboutMe";

const Results = () => {
  return (
    <ResultContainer>
      <Title>Result</Title>
      <Container>
        <LeftArrow />
        <ImageContainer>
          <img src={peeppo} alt="" />
        </ImageContainer>
        <RightArrow />
      </Container>
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  background-color: #f8f9fa;
  padding: 30px 0px 30px 0px;
`;
const ImageContainer = styled.div`
  margin: 30px 0px 70px 0px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftArrow = styled.div`
  cursor: pointer;
  left: 0;
  top: 0;
  content: "";
  width: 50px; /* 사이즈 */
  height: 50px; /* 사이즈 */
  border-top: 5px solid gray; /* 선 두께 */
  border-right: 5px solid gray; /* 선 두께 */
  transform: rotate(225deg); /* 각도 */
`;

export const RightArrow = styled.div`
  cursor: pointer;
  left: 0;
  top: 0;
  content: "";
  width: 50px; /* 사이즈 */
  height: 50px; /* 사이즈 */
  border-top: 5px solid gray; /* 선 두께 */
  border-right: 5px solid gray; /* 선 두께 */
  transform: rotate(45deg); /* 각도 */
`;
export default Results;
