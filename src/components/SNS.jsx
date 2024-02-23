import React from "react";
import styled from "styled-components";
import { Title } from "./AboutMe";
import tistory from "../assets/images/tistory.png";
import instagram from "../assets/images/instagram.jpg";
import github from "../assets/images/github.png";
import { Stack } from "./Stacks";

const SNS = () => {
  return (
    <SnsContainer id="sns">
      <Title>SNS</Title>
      <Email>E-MAIL : seomyeongjin99@gmail.com</Email>
      <Container>
        <Link href="https://myz1n1.tistory.com/">
          <Logo src={tistory} alt="" />
          <Stack>기술 블로그</Stack>
          <div>myz1n1</div>
        </Link>
        <Link href="https://instagram.com/zzin.dev">
          <Logo src={instagram} alt="" />
          <Stack>개발 인스타그램</Stack>
          <div>@zzin.dev</div>
        </Link>
        <Link href="https://github.com/myeongjin99">
          <Logo src={github} alt="" />
          <Stack>깃허브</Stack>
          <div>@myeongjin99</div>
        </Link>
      </Container>
    </SnsContainer>
  );
};
const SnsContainer = styled.div`
  padding: 0px 0px 90px 0px;
`;
const Email = styled.div`
  font-family: "GongGothicMedium";
  color: gray;
  margin-bottom: 50px;
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
const Logo = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10%;
`;

const Link = styled.a`
  text-decoration: none;
  color: gray;
`;
export default SNS;
