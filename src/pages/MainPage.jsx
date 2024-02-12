import React from "react";
import styled from "styled-components";
import first from "../assets/images/second.png";

import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Results from "../components/Results";
import Stacks from "../components/Stacks";
import SNS from "../components/SNS";

const MainPage = () => {
  return (
    <div>
      <MainPageContainer>
        <Header />
      </MainPageContainer>
      <AboutMe />
      <Results />
      <Stacks />
      <SNS />
    </div>
  );
};

const MainPageContainer = styled.div`
  background-image: url(${first});
  height: 730px;
`;
export default MainPage;
