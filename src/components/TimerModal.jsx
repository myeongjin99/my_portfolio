import React from "react";
import {
  CancelButton,
  Content,
  ModalBck,
  ModalContainer,
  SubTitle,
  Title,
} from "./ResultModal";
import styled from "styled-components";

const TimerModal = ({ isModalOpen, setIsModalOpen }) => {
  const cancelOnclick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ModalContainer />
      <div>
        <ModalBck>
          <CancelButton onClick={cancelOnclick}>X</CancelButton>

          <Title>뽀모도로 타이머</Title>
          <Link href="http://pomodorosite.s3-website.ap-northeast-2.amazonaws.com/">
            Site Link
          </Link>
          <SubTitle>💻 서비스 개요</SubTitle>
          <Content>타이머를 설정해서 공부시간 조절하기 & 할일 기록하기</Content>
          <SubTitle>📆 프로젝트 기간</SubTitle>
          <Content>2023 06.05 ~ 2023.06.12</Content>
          <SubTitle>🙆‍♀️ 참여부분</SubTitle>
          <Content>타이머, 배포 </Content>
          <SubTitle>🛠 활용기술</SubTitle>
          <Content>
            HTML, CSS, JS <br />
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
  color: #fda6e3;
`;
export default TimerModal;
