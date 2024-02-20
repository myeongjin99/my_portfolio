import React from "react";
import styled from "styled-components";
import { Title } from "./AboutMe";
import react from "../assets/images/react.png";
import ts from "../assets/images/typescript.png";
import js from "../assets/images/js.png";
import recoil from "../assets/images/recoil.png";
import redux from "../assets/images/redux.png";
import rq from "../assets/images/rq.png";
import github from "../assets/images/github.png";
import html from "../assets/images/html.png";
import css from "../assets/images/CSS.png";

const Stacks = () => {
  return (
    <StacksContainer>
      <Title>Stacks</Title>
      <StackLogoContainer>
        <LogosContainer>
          <LogoContainer>
            <StackLogo src={react} alt="" />
            <Stack>리액트</Stack>
          </LogoContainer>
          <LogoContainer>
            <StackLogo src={ts} alt="" />
            <Stack>타입스크립트</Stack>
          </LogoContainer>
          <LogoContainer>
            <StackLogo src={js} alt="" />
            <Stack>자바스크립트</Stack>
          </LogoContainer>
        </LogosContainer>
        <LogosContainer>
          <LogoContainer>
            <StackLogo src={recoil} alt="" />
            <Stack>리코일</Stack>
          </LogoContainer>
          <LogoContainer>
            <StackLogo src={redux} alt="" />
            <Stack>리덕스</Stack>
          </LogoContainer>
          <LogoContainer>
            <StackLogo src={rq} alt="" />
            <Stack>리액트 쿼리</Stack>
          </LogoContainer>
        </LogosContainer>
        <LogosContainer>
          <LogoContainer>
            <StackLogo src={html} alt="" />
            <Stack>HTML5</Stack>
          </LogoContainer>
          <LogoContainer>
            <StackLogo src={css} alt="" />
            <Stack>CSS3</Stack>
          </LogoContainer>
          <LogoContainer>
            <StackLogo src={github} alt="" />
            <Stack>깃허브</Stack>
          </LogoContainer>
        </LogosContainer>
      </StackLogoContainer>
    </StacksContainer>
  );
};
const StacksContainer = styled.div`
  background-color: #f8f9fa;
  padding: 0px 0px 30px 0px;
`;
const StackLogoContainer = styled.div`
  margin-bottom: 70px;
`;

const LogosContainer = styled.div`
  display: flex;
  gap: 20%;
  justify-content: center;
  margin-top: 20px;
`;
const LogoContainer = styled.div``;
const StackLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const Stack = styled.div`
  font-family: "GongGothicMedium";
  margin-top: 10px;
`;
export default Stacks;
