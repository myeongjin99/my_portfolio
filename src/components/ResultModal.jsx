import React from "react";
import styled from "styled-components";

const ResultModal = ({ isModalOpen, setIsModalOpen }) => {
  const cancelOnclick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <ModalContainer />
      <div>
        <ModalBck>
          <CancelButton onClick={cancelOnclick}>X</CancelButton>
          <Title>물물교환 거래 플랫폼</Title>
          <SubTitle>💻 서비스 개요</SubTitle>
          <Content>
            유저들의 물건이 화폐가 되어 유저들간의 물물교환이 가능하고 <br />더
            나아가 "레이팅게임"을 통해 <br />각 물건마다 정해진 입찰하한가를
            통해 <br />
            경매를 진행할수 있어요 !
          </Content>
          <SubTitle>📆 프로젝트 기간</SubTitle>
          <Content>2023 07.28 ~ 2023.09.08</Content>
          <SubTitle>🙆‍♀️ 참여부분</SubTitle>
          <Content>로그인, 회원가입, </Content>
          <SubTitle>🛠 활용기술</SubTitle>
          <Content>
            typescript, javascript,html, css, <br />
            styled-components, axios, <br />
            reactquery,recoil, webrtc
          </Content>
        </ModalBck>
      </div>
    </>
  );
};

const ModalContainer = styled.div`
  background-color: gray;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  opacity: 50%;
`;

const ModalBck = styled.div`
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: calc(50% + 50px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
  z-index: 999;
`;

const CancelButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  right: 0;
`;

const Title = styled.div`
  font-family: "GongGothicMedium";
  font-size: 23px;
  margin-top: 40px;
`;

const SubTitle = styled.div`
  font-family: "GongGothicMedium";
  font-size: 17px;
  margin-top: 30px;
`;

const Content = styled.div`
  font-family: "GongGothicMedium";
  font-size: 15px;
  margin-top: 20px;
  line-height: 20px;
`;
export default ResultModal;
