import React from "react";
import styled from "styled-components";
import {
  CancelButton,
  Content,
  ModalBck,
  ModalContainer,
  SubTitle,
  Title,
} from "./ResultModal";

const WeatherApiModal = ({ isModalOpen, setIsModalOpen }) => {
  const cancelOnclick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <ModalContainer />
      <div id="result">
        <ModalBck>
          <CancelButton onClick={cancelOnclick}>X</CancelButton>
          <Title>날씨에 따라 옷 추천해주는 서비스</Title>
          <SubTitle>💻 서비스 개요</SubTitle>
          <Content>
            날씨 api와 챗 지피티 api를 활용하여 <br />
            날씨에 맞게 옷 추천해주는 서비스
          </Content>
          <SubTitle>📆 프로젝트 기간</SubTitle>
          <Content>2024 03.12 ~ 2024.03.24</Content>
          <SubTitle>🙆‍♀️ 참여부분</SubTitle>
          <Content>날씨 api, 챗 지피티 api, 배포</Content>
          <SubTitle>🛠 활용기술</SubTitle>
          <Content>
            typescript, javascript, html, css, <br />
            styled-components, axios, reactquery
            <br />
          </Content>
        </ModalBck>
      </div>
    </>
  );
};

const Link = styled.a`
  font-family: "GongGothicMedium";
  text-decoration: none;
  color: #80a6f8;
`;

export default WeatherApiModal;
