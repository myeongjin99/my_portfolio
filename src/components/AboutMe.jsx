import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Title>ABOUT ME</Title>
      <Contents>
        프론트엔드 개발자 서명진입니다. <br />
        저는 사용자 경험을 중시하고, 직관적이고 효율적인 웹사이트를 만들기 위해
        끊임없이 노력하고 있습니다.
      </Contents>
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.div`
  padding: 30px 0px 70px 0px;
`;

export const Title = styled.div`
  padding: 70px 0px 30px 0px;
  font-size: 35px;
  font-family: "GongGothicMedium";
`;

const Contents = styled.div`
  font-family: "GongGothicMedium";
  margin: 30px 0px 70px 0px;
  line-height: 30px;
`;
export default AboutMe;
