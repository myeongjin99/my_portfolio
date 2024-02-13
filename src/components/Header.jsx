import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import menu from "../assets/images/category.png";
import first from "../assets/images/second.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleReSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleReSize);
    return () => window.removeEventListener("resize", handleReSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuOnclick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HeaderContainer>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        JINI'S WEBFOLIO
      </Logo>
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
  background-image: url(${first});
  position: sticky;
  top: 0;
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px 0px 40px;
  background-color: ${(props) => (props.isScrolled ? "black" : "transparent")};
  z-index: 1000;
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
  cursor: pointer;
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
    background-color: white;
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
  cursor: pointer;
  @media screen and (max-width: 768px) {
    color: black;
  }
`;

export default Header;
