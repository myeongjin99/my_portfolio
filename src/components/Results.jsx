import React, { useState } from "react";
import styled from "styled-components";
import peeppo from "../assets/images/PEEPPO.png";
import pomodoro from "../assets/images/pomodoro.png";
import weather from "../assets/images/weather.png";
import { Title } from "./AboutMe";
import ResultModal from "./ResultModal";
import TimerModal from "./TimerModal";
import WeatherApiModal from "./WeatherApiModal";

const images = [peeppo, pomodoro, weather];

const Results = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModalType, setSelectedModalType] = useState(null);

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <ResultContainer id="result">
      <Title>Result</Title>
      <Container>
        <LeftArrow onClick={handlePreviousImage} />
        <ImageContainer>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              isSelected={selectedImageIndex === index}
              onClick={() => {
                setSelectedModalType(
                  index === 0 ? "peeppo" : index === 1 ? "pomodoro" : "weather"
                );

                setIsModalOpen(!isModalOpen); // 모달 열기
              }}
            />
          ))}
          {isModalOpen && selectedModalType === "peeppo" && (
            <ResultModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
          {isModalOpen && selectedModalType === "pomodoro" && (
            <TimerModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
          {isModalOpen && selectedModalType === "weather" && (
            <WeatherApiModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </ImageContainer>
        <RightArrow onClick={handleNextImage} />
      </Container>
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  padding: 30px 0px 30px 0px;
`;
const ImageContainer = styled.div`
  margin: 30px 0px 70px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    padding: 0px 20px 0px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftArrow = styled.div`
  cursor: pointer;
  left: 0;
  top: 0;
  width: 30px; /* 사이즈 */
  height: 30px; /* 사이즈 */
  border-top: 5px solid gray; /* 선 두께 */
  border-right: 5px solid gray; /* 선 두께 */
  transform: rotate(225deg); /* 각도 */
  @media screen and (max-width: 600px) {
    width: 15px; /* 적절한 크기 조정 */
    height: 10px; /* 적절한 크기 조정 */
    border-top-width: 3px; /* 적절한 선 두께 조정 */
    border-right-width: 3px; /* 적절한 선 두께 조정 */
    margin: 0px 20px 0px 20px;
  }
`;

export const RightArrow = styled.div`
  cursor: pointer;
  left: 0;
  top: 0;
  width: 30px; /* 사이즈 */
  height: 30px; /* 사이즈 */
  border-top: 5px solid gray; /* 선 두께 */
  border-right: 5px solid gray; /* 선 두께 */
  transform: rotate(45deg); /* 각도 */
  @media screen and (max-width: 600px) {
    width: 15px; /* 적절한 크기 조정 */
    height: 10px; /* 적절한 크기 조정 */
    border-top-width: 3px; /* 적절한 선 두께 조정 */
    border-right-width: 3px; /* 적절한 선 두께 조정 */
    margin: 0px 20px 0px 20px;
  }
`;

const Image = styled.img`
  margin: 0 10px;
  max-width: ${(props) => (props.isSelected ? "80%" : "150px")};
  max-height: ${(props) => (props.isSelected ? "80%" : "150px")};
  opacity: ${(props) => (props.isSelected ? 1 : 0.4)};
  transition: all 0.7s ease;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    max-width: ${(props) => (props.isSelected ? "60%" : "70px")};
    max-height: ${(props) => (props.isSelected ? "60%" : "70px")};
  }
`;

export default Results;
