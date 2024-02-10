import React, { useEffect, useState } from "react";
import styled from "styled-components";
import menu from "../assets/images/category.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleReSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleReSize);
    return () => window.removeEventListener("resize", handleReSize);
  }, []);

  const menuOnclick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HeaderContainer>
      <Logo>JINI'S WEBFOLIO</Logo>
      {isMobile ? (
        <div>
          <Menu src={menu} alt="" onClick={menuOnclick} />
        </div>
      ) : (
        <CategoryContainer>
          <Category>ABOUT ME</Category>
          <Category>RESULT</Category>
          <Category>STACKS</Category>
          <Category>SNS</Category>
        </CategoryContainer>
      )}
      {isMobile && isMenuOpen && (
        <CategoryContainer>
          <Category>ABOUT ME</Category>
          <Category>RESULT</Category>
          <Category>STACKS</Category>
          <Category>SNS</Category>
        </CategoryContainer>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px 0px 40px;
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

const Logo = styled.div`
  display: flex;
  font-family: "ChosunGs";
  font-size: 23px;
  font-weight: 500;
  color: white;
`;

const Menu = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 768px) {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 70px;
    left: 0px;
    padding: 10px 0px 10px 0px;
  }
`;

const Category = styled.div`
  font-family: "ChosunGs";
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

export default Header;
