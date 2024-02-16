import React, { useState } from "react";
import styled from "styled-components";
import peeppo from "../assets/images/PEEPPO.png";
import first from "../assets/images/instagram.jpg";
import second from "../assets/images/tistory.png";
import { Title } from "./AboutMe";

const images = [peeppo, peeppo, peeppo];

const Results = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
    <ResultContainer>
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
            />
          ))}
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
`;

const Image = styled.img`
  margin: 0 10px;
  max-width: ${(props) => (props.isSelected ? "80%" : "150px")};
  max-height: ${(props) => (props.isSelected ? "80%" : "150px")};
  opacity: ${(props) => (props.isSelected ? 1 : 0.4)};
  transition: all 0.7s ease;
  cursor: pointer;
`;
export default Results;
