import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Results from "../components/Results";
import Stacks from "../components/Stacks";
import SNS from "../components/SNS";
import ImageSlide from "../components/ImageSlide";

const MainPage = () => {
  return (
    <div>
      <Header />
      <ImageSlide />
      <AboutMe />
      <Results />
      <Stacks />
      <SNS />
    </div>
  );
};

export default MainPage;
