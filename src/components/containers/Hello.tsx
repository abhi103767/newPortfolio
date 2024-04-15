import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Button from '../Button';
import Paragraph from '../Paragraph';

import myPhoto from '../../assets/images/profile.jpg';

interface StyledHeadingProps {
  mb?: number;
}

const StyledHello = styled.div`
  width: 100%;
  margin-top: 200px;
  margin-bottom: 220px;
  padding: 0px 70px;
  background-color: ${(props) => props.theme.background};
  transition: all 0.5s ease-in-out;

  @media (max-width: 425px) {
    margin-top: 130px;
    margin-bottom: 130px;
    padding: 0px 15px;
  }
  @media only screen and (max-width: 760px) and (min-width: 425px) {
    margin-top: 160px;
    margin-bottom: 140px;
    padding: 0px 25px;
  }

  .container {
    max-width: 1170px;
    margin: 0 auto;

    .wrapper {
      display: flex;

      @media (max-width: 1100px) {
        justify-content: center;
        width: 100%;
      }
    }
  }
`;

const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => props.theme.primary};
    margin-bottom: 20px;
    @media (max-width: 1100px) {
      text-align: center;
    }
    @media (max-width: 425px) {
      font-size: 18px;
    }
  }

  a {
    color: inherit;
    width: fit-content;
    text-decoration: inherit;
    @media (max-width: 1100px) {
      text-align: center;
      margin: 0 auto;
    }

    button {
      @media (max-width: 425px) {
        max-width: 300px;
        width: 300px;
      }
    }
  }

  p {
    @media (max-width: 1100px) {
      text-align: center;
      width: 80%;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    @media (max-width: 425px) {
      width: 100%;
    }
  }
`;

const StyledHeading = styled.h2<StyledHeadingProps>`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 52px;
  line-height: 62px;
  color: ${(props) => props.theme.text};
  margin-bottom: ${(props) => props.mb}px;
  @media (max-width: 1100px) {
    text-align: center;
    font-size: 65px;
    line-height: 80px;
  }
  @media (max-width: 425px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

const StyledRigthContent = styled.div`
  .myPhotoWrapper {
    position: relative;
    @media (max-width: 1100px) {
      display: none;
    }

    .myPhoto {
      position: absolute;
      top: 0;
      left: 0;
      width: 270px;
      height: 240px;
      background: url(${myPhoto});
      background-size: 270px 240px;
      background-repeat: no-repeat;
      border-radius: 10px;
     
      background-blend-mode: color-dodge;
    
      z-index: 10;

      &:hover + .backgroundDashedLines {
        transform: translate(-20px, -20px);
        box-shadow: 0px 0px 10px 5px rgba(93, 53, 255, 0.4);
      }
    }

    .backgroundDashedLines {
      position: absolute;
      z-index: 0;
      top: 20px;
      left: 20px;
      width: 270px;
      height: 240px;
      border: 2px dashed ${(props) => props.theme.primary};
      border-radius: 10px;
 
      transition: all 0.2s ease-in-out;
    }
  }
`;

const Hello = () => {
  return (
    <StyledHello id="hello">
      <div className="container">
        <div className="wrapper">
          <StyledLeftContent>
            <span>Hi, my name is</span>
            <StyledHeading>Avinash.</StyledHeading>
            <StyledHeading mb={25}>I build things for the web.</StyledHeading>
            <Paragraph mb={15} width={510}>
        With 2.5 years of experience, adept full-stack developer skilled in building and deploying scalable applications. Strong problem-solving and debugging abilities, comfortable working independently or as part of a team.{' '}
              {/* <Link to="works" smooth={true} offset={-150} duration={500}>
                <span> examples of my work.</span>
              </Link> */}
            </Paragraph>
            <Paragraph mb={30} width={430}>
              If you have job offers then write to my email below, or you can write to me in other
              social networks.
            </Paragraph>
            <a href="mailto:avinash1234sharma1@gmail.com">
              <Button onClick={() => {}}>Get in touch</Button>
            </a>
          </StyledLeftContent>
          <StyledRigthContent>
            <div className="myPhotoWrapper">
              <div className="myPhoto"></div>
              <div className="backgroundDashedLines"></div>
            </div>
          </StyledRigthContent>
        </div>
      </div>
    </StyledHello>
  );
};

export default React.memo(Hello);
