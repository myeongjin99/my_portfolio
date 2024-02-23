import React from "react";
import {
  CancelButton,
  Content,
  ModalBck,
  ModalContainer,
  SubTitle,
} from "./ResultModal";
import { Title } from "./AboutMe";

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

export default TimerModal;
