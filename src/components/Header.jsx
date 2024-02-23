import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HeaderContainer>
      <HeaderBoxContainer isScrolled={isScrolled}>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        >
          JINI'S WEBFOLIO
        </Logo>
        {isMobile ? (
          <div>
            <Menu onClick={menuOnclick}>MENU</Menu>
          </div>
        ) : (
          <CategoryContainer>
            <Category
              onClick={() => {
                scrollToSection("about me");
              }}
            >
              ABOUT ME
            </Category>
            <Category
              onClick={() => {
                scrollToSection("about me");
              }}
            >
              WORK
            </Category>
            <Category
              onClick={() => {
                scrollToSection("result");
              }}
            >
              RESULT
            </Category>
            <Category
              onClick={() => {
                scrollToSection("stacks");
              }}
            >
              STACKS
            </Category>
            <Category
              onClick={() => {
                scrollToSection("sns");
              }}
            >
              SNS
            </Category>
          </CategoryContainer>
        )}
        {isMobile && isMenuOpen && (
          <CategoryContainer>
            <Category
              onClick={() => {
                scrollToSection("about me");
                setIsMenuOpen(false);
              }}
            >
              ABOUT ME
            </Category>
            <Category
              onClick={() => {
                scrollToSection("work");
                setIsMenuOpen(false);
              }}
            >
              WORK
            </Category>
            <Category
              onClick={() => {
                scrollToSection("result");
                setIsMenuOpen(false);
              }}
            >
              RESULT
            </Category>
            <Category
              onClick={() => {
                scrollToSection("stacks");
                setIsMenuOpen(false);
              }}
            >
              STACKS
            </Category>
            <Category
              onClick={() => {
                scrollToSection("sns");
                setIsMenuOpen(false);
              }}
            >
              SNS
            </Category>
          </CategoryContainer>
        )}
      </HeaderBoxContainer>
      <IntroduceContainer>
        <Introduce>
          기록을 좋아하는 <Name>서명진</Name>입니다.
        </Introduce>
        <IntroduceContents>
          프론트엔드 개발자를 희망하고 있습니다.
          <br />
          기록하는 것을 좋아해 학습한 것을 기록하고 있습니다.
          <br />
          더불어 소통하는 것도 좋아합니다!
        </IntroduceContents>
      </IntroduceContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-image: url(${first});
  display: flex;
  height: 750px;
  @media screen and (max-width: 600px) {
    display: flex;
    background-color: black;
    background-size: 170%;
    height: 650px;
  }
`;

const HeaderBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30px;
  align-items: center;
  width: 100%;
  padding: 18px 0px 15px 0px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${(props) => (props.isScrolled ? "black" : "transparent")};
  @media screen and (max-width: 600px) {
    font-family: "ChosunGs";
    background-color: black;
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

const Menu = styled.div`
  cursor: pointer;
  height: 30px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    color: white;
    border: 1px solid white;
    font-family: "ChosunGs";
    font-size: 13px;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 30px;
  :hover {
    color: gray;
  }
  @media screen and (max-width: 600px) {
    background-color: black;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 60px;
    padding: 20px 0px 20px 0px;
  }
`;

const Category = styled.div`
  font-family: "ChosunGs";
  font-size: 18px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    color: white;
    font-size: 15px;
    display: flex;
    position: relative;
    left: 45px;
  }
`;

const IntroduceContainer = styled.div`
  margin-left: 150px;
  @media screen and (max-width: 600px) {
    border: 1px solid white;
    width: 500px;
    margin-left: 0;
    margin: 0 auto;
  }
`;

const Introduce = styled.div`
  color: white;
  font-family: "GongGothicMedium";
  letter-spacing: 2.5px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  animation: slideIn 1s ease forwards; /* slideIn 애니메이션 적용 */
  @keyframes slideIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1; /* 투명도 1 */
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Name = styled.span`
  position: relative;
  font-size: 45px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px; /* 밑줄의 위치 조절 */
    width: 100%; /* 텍스트 너비만큼 밑줄 길이 설정 */
    height: 6px; /* 밑줄의 두께 설정 */
    background-color: #96bbf1bc; /* 원하는 색상 설정 */
  }
  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
`;

const IntroduceContents = styled.div`
  font-family: "GongGothicMedium";
  line-height: 40px;
  color: white;
  margin-top: 40px;
  margin-left: 250px;
  font-size: 20px;
  animation: slideIn 3s ease forwards; /* slideIn 애니메이션 적용 */
  @keyframes slideIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1; /* 투명도 1 */
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 15px;
    margin-left: 0;
  }
`;
export default Header;
