import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <AboutMeContainer id="about me">
      <Title>ABOUT ME</Title>
      <Contents>
        프론트엔드 개발자를 희망합니다! <br />
        새로운 기술에 대한 열정과 호기심을 가지고 있으며
        <br />
        끊임없이 자기계발에 힘쓰고 있습니다. <br />
        변화에 발 맞춰 끊임없이 배우고 성장하는 것을 목표로 삼고 있습니다.
      </Contents>
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.div`
  padding: 70px 0px 100px 0px;
`;

export const Title = styled.div`
  padding: 70px 0px 30px 0px;
  font-size: 35px;
  font-family: "GongGothicMedium";
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const Contents = styled.div`
  font-family: "GongGothicMedium";
  margin: 30px 0px 70px 0px;
  line-height: 30px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export default AboutMe;
