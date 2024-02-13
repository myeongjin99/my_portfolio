import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image1 from "../assets/images/first.png";
import image2 from "../assets/images/second.png";
import { LeftArrow, RightArrow } from "./Results";

const images = [image1, image2];

const ImageSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // 클리어 필요
  }, []);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <ImageSlideContainer>
      <ImageBoxContainer>
        <LeftArrow onClick={prevSlide}></LeftArrow>
        <ImageContainer>
          <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} />
        </ImageContainer>
        <RightArrow onClick={nextSlide}></RightArrow>
      </ImageBoxContainer>
    </ImageSlideContainer>
  );
};

const ImageSlideContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const ImageBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div``;
export default ImageSlide;
