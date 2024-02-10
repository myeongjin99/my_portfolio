import React from "react";
import styled from "styled-components";
import first from "../assets/images/second.png";

import Header from "../components/Header";

const MainPage = () => {
  return (
    <div>
      <MainPageContainer>
        <Header />
      </MainPageContainer>
    </div>
  );
};

const MainPageContainer = styled.div`
  background-image: url(${first});
  height: 750px;
`;
export default MainPage;
