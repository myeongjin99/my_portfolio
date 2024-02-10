import React, { useState } from "react";
import styled from "styled-components";
import image1 from "../assets/images/first.png";
import image2 from "../assets/images/second.png";

const images = [image1, image2];

const ImageSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // 다음 버튼시 index 1 증가
  // 다음 이미지로 이동
  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  // 이전 이미지로 이동
  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <ImageSlideContainer>
      <ImageContainer>
        <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} />
      </ImageContainer>
      <div>
        <button onClick={prevSlide}>이전</button>
        <button onClick={nextSlide}>다음</button>
      </div>
    </ImageSlideContainer>
  );
};

const ImageSlideContainer = styled.div`
  width: 100%;
  height: 600px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 600px;
  /* border: 1px solid black; */
`;
export default ImageSlide;
