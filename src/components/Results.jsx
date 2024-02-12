import React from "react";
import styled from "styled-components";
import { Title } from "./AboutMe";
import peeppo from "../assets/images/PEEPPO.png";

const Results = () => {
  return (
    <ResultContainer>
      <Title>Result</Title>
      <ImageContainer>
        <img src={peeppo} alt="" />
      </ImageContainer>
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
export default Results;
