import React from "react";
import styled from "styled-components";
import { Title } from "./AboutMe";

const Work = () => {
  return (
    <WorkContainer id="work">
      <Title>WORK & AWARD</Title>
      <Contents>
        ✅ 우경정보기술(2021.07 ~ 2021.12, 6개월)
        <br />
        - 공공데이터 청년인턴 과정
        <br />
        ✅ 수성구청(2022.09 ~ 2023.02, 6개월)
        <br />
        - 대구광역시 보안등 사각지대 데이터 분석
        <br />
        - 대구광역시 고독사 데이터 분석
        <br />⭐ 2022 유통 소비 도시가스 빅데이터 분석 해커톤 대회
        장려상(2022.12.22) - 경동도시가스
        <br />- 울산광역시 복지사각지대 분석
      </Contents>
    </WorkContainer>
  );
};

const WorkContainer = styled.div`
  background-color: #f8f9fa;
  padding: 30px 0px 30px 0px;
`;

const Contents = styled.div`
  font-family: "GongGothicMedium";
  margin: 30px 0px 70px 0px;
  line-height: 37px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
export default Work;
