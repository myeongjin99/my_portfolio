import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Results from "../components/Results";
import Stacks from "../components/Stacks";
import SNS from "../components/SNS";
import Work from "../components/Work";

const MainPage = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Work />
      <Results />
      <Stacks />
      <SNS />
    </div>
  );
};

export default MainPage;
