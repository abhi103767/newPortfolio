import React from 'react';
import styled, { keyframes } from 'styled-components';

import NavigationItem from '../NavigationItem';
import Paragraph from '../Paragraph';

import myPhoto from '../../assets/images/me.jpg';

const rotateReact = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledAbout = styled.div`
  width: 100%;
  margin-bottom: 100px;
  padding: 0px 70px;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0px 20px;

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

  & > p {
    @media (max-width: 1100px) {
      text-align: center;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    @media (max-width: 425px) {
      width: 100%;
    }
  }
`;

const StyledRightContent = styled.div`
  margin-left: auto;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1200px) {
    margin-left: -50px;
  }

  @media (max-width: 1100px) {
    display: none;
  }

  .reactLogo {
    position: relative;
    left: 100px;
    top: -80px;
    animation: 15s ${rotateReact} linear infinite;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 1100px) {
    justify-content: center;
    margin-bottom: 40px;
  }

  .leftRect {
    width: 100px;
    height: 5px;
    background: ${(props) => props.theme.backgroundLighter};
    transition: all 0.5s ease-in-out;

    @media (max-width: 1100px) {
      width: 200px;
    }
    @media (max-width: 780px) {
      width: 100px;
    }
    @media (max-width: 425px) {
      width: 70px;
    }
  }

  .rigthRect {
    width: 340px;
    height: 5px;
    background: ${(props) => props.theme.backgroundLighter};
    transition: all 0.5s ease-in-out;

    @media (max-width: 1100px) {
      width: 200px;
    }
    @media (max-width: 780px) {
      width: 100px;
    }
    @media (max-width: 425px) {
      width: 70px;
    }
  }
`;

const MyPhoto = styled.div`
  .myPhotoWrapper {
    display: none;
    margin-bottom: 40px;
    @media only screen and (max-width: 1100px) and (min-width: 0px) {
      display: flex;
      justify-content: center;
    }

    .myPhoto {
      width: 300px;
      height: 225px;
      background: url(${myPhoto});
      background-size: 300px 225px;
      background-repeat: no-repeat;
      background-color: ${(props) => props.theme.background};
      background-blend-mode: color-dodge;
      border-radius: 10px;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout id="about">
      <div className="container">
        <div className="wrapper">
          <StyledLeftContent>
            <Heading>
              <div className="leftRect"></div>
              <NavigationItem number={'01.'} text={'About'} fontSize={'26px'} />
              <div className="rigthRect"></div>
            </Heading>
            <MyPhoto>
              <div className="myPhotoWrapper">
                <div className="myPhoto"></div>
              </div>
            </MyPhoto>
            <Paragraph>I'm 21 and I'm from Gwalior</Paragraph>
            <Paragraph width={540} mb={20}>
        I  dropped out from college(2nd Year).
            </Paragraph>
            <Paragraph mb={20}>
              I want to develop as a fullstack developer, meet other developers and implement web
              interfaces in interesting projects.
            </Paragraph>
          </StyledLeftContent>
          <StyledRightContent>
            <div className="reactLogo">
              <svg
                width="368"
                height="368"
                viewBox="0 0 368 368"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M178.223 162.237C173.958 163.38 170.128 165.762 167.216 169.081C164.305 172.401 162.444 176.51 161.867 180.887C161.291 185.265 162.026 189.715 163.979 193.675C165.932 197.635 169.015 200.927 172.839 203.134C176.663 205.342 181.055 206.366 185.461 206.077C189.867 205.788 194.088 204.199 197.591 201.511C201.094 198.823 203.721 195.157 205.14 190.976C206.559 186.795 206.707 182.287 205.564 178.022C204.031 172.303 200.289 167.428 195.162 164.468C190.035 161.507 183.942 160.705 178.223 162.237ZM268.603 211.53C267.621 209.533 266.562 207.51 265.426 205.462C266.833 204.603 268.205 203.734 269.54 202.857C294.766 186.268 308.804 166.613 304.74 151.447C300.844 136.906 280.222 127.358 251.735 125.367C248.928 125.174 246.119 125.052 243.305 125.001C243.267 123.125 243.194 121.25 243.085 119.377C241.317 89.2359 231.303 67.2551 216.135 63.2011C201.591 59.3112 183.018 72.4071 167.063 96.0896C165.491 98.4265 163.98 100.803 162.529 103.218C160.881 102.313 159.218 101.439 157.538 100.595C130.542 87.0755 106.498 84.7732 95.4086 95.8874C84.7753 106.545 86.8447 129.178 99.3956 154.829C100.642 157.368 101.951 159.875 103.323 162.349C100.467 164.055 97.7292 165.792 95.1391 167.554C71.962 183.318 59.3778 201.663 63.2604 216.152C67.2696 231.118 88.8197 241.433 117.887 243.398C120.244 243.554 122.603 243.652 124.965 243.69C125.017 246.737 125.155 249.781 125.377 252.821C127.455 280.774 137.058 300.838 151.55 304.715C166.518 308.716 186.218 295.203 202.444 271.005C203.725 269.092 204.991 267.088 206.238 265.01C208.906 266.488 211.614 267.889 214.362 269.216C239.616 281.378 261.797 283.078 272.393 272.459C283.336 261.489 281.465 237.671 268.603 211.53L268.603 211.53ZM102.969 103.43C109.795 96.589 129.445 98.4714 152.753 110.144C154.243 110.891 155.749 111.683 157.272 112.52C152.01 122.527 147.417 132.872 143.523 143.487C132.946 147.364 122.63 151.92 112.641 157.129C111.365 154.829 110.147 152.497 108.988 150.134L108.988 150.135C98.2344 128.157 96.5609 109.853 102.969 103.43ZM131.365 185.166C126.451 178.846 122.003 172.529 118.092 166.326C124.569 162.939 131.579 159.709 138.978 156.702C137.487 161.385 136.105 166.102 134.835 170.852C133.567 175.595 132.411 180.367 131.365 185.166ZM118.609 232.743C107.52 232.266 96.6141 229.752 86.4354 225.328C83.5894 224.322 80.9797 222.744 78.7677 220.691C76.5557 218.637 74.7883 216.152 73.5748 213.388C71.2193 204.596 81.3235 189.867 101.145 176.385C103.635 174.697 106.173 173.083 108.757 171.544C114.794 181.088 121.455 190.222 128.698 198.887C126.739 210.17 125.527 221.569 125.07 233.011C122.915 232.975 120.761 232.886 118.609 232.743ZM230.358 158.649C226.992 155.012 223.554 151.444 220.044 147.944C216.59 144.5 213.064 141.13 209.465 137.836C217.431 136.744 225.158 136.059 232.514 135.784C232.18 143.437 231.461 151.069 230.358 158.649ZM175.92 102.057C189.591 81.7643 204.611 71.1736 213.377 73.5183C222.712 76.0149 230.897 93.9784 232.424 120.002C232.522 121.698 232.589 123.396 232.626 125.094C221.341 125.534 210.098 126.72 198.97 128.644C190.351 121.371 181.251 114.687 171.733 108.639C173.074 106.411 174.47 104.217 175.92 102.057ZM166.48 117.952C172.969 122.083 179.246 126.537 185.287 131.3C175.659 133.399 166.145 135.945 156.745 138.94C159.778 131.497 163.045 124.462 166.48 117.952ZM137.877 209.425C141.191 213.058 144.589 216.611 148.071 220.086C151.623 223.629 155.258 227.086 158.976 230.456C151.284 231.647 143.536 232.443 135.762 232.84C136.05 225.385 136.758 217.525 137.877 209.425ZM193.573 265.054C187.621 274.422 179.994 282.614 171.076 289.221L171.075 289.221C168.783 291.184 166.112 292.656 163.228 293.546C160.345 294.436 157.309 294.725 154.309 294.396C145.516 292.045 137.805 275.933 136.028 252.028C135.822 249.202 135.693 246.373 135.643 243.539C146.989 242.968 158.283 241.629 169.447 239.53C178.196 246.812 187.413 253.512 197.039 259.586C195.928 261.436 194.773 263.259 193.573 265.054ZM202.231 250.238C195.928 246.271 189.488 241.744 183.043 236.743C187.715 235.685 192.449 234.515 197.245 233.231C202.167 231.912 206.997 230.502 211.735 229.001C208.932 236.238 205.76 243.326 202.231 250.238L202.231 250.238ZM222.964 194.418C221.008 201.753 218.816 209.018 216.387 216.214C209.36 218.646 202.026 220.894 194.481 222.916C186.967 224.929 179.595 226.654 172.433 228.084C166.632 223.111 161.026 217.925 155.615 212.526C150.233 207.159 145.061 201.593 140.099 195.829C141.505 188.362 143.19 180.955 145.154 173.609L145.155 173.611C147.117 166.27 149.355 159.011 151.869 151.834C158.905 149.366 166.192 147.109 173.635 145.115C181.112 143.11 188.562 141.422 195.889 140.046C201.606 145.002 207.144 150.155 212.501 155.505C217.88 160.863 223.081 166.392 228.103 172.092C226.655 179.593 224.942 187.035 222.964 194.418L222.964 194.418ZM250.992 136.022C275.399 137.726 292.077 145.448 294.425 154.211C296.927 163.547 285.452 179.61 263.673 193.935L263.672 193.936C262.469 194.725 261.231 195.51 259.956 196.29C253.775 186.732 246.951 177.606 239.53 168.975C241.497 157.971 242.724 146.848 243.205 135.68C245.867 135.734 248.463 135.849 250.992 136.022ZM236.856 182.506C241.783 188.62 246.389 194.985 250.657 201.576C243.668 205.24 236.493 208.537 229.159 211.452C230.628 206.722 232.001 201.964 233.281 197.177C234.581 192.315 235.773 187.425 236.856 182.506ZM264.831 264.914C258.401 271.359 240.592 269.993 218.994 259.592C216.519 258.402 214 257.099 211.439 255.684C216.586 245.621 221.048 235.222 224.793 224.558C235.549 220.681 246.025 216.069 256.148 210.754C257.173 212.61 258.13 214.441 259.02 216.246L259.02 216.245C264.163 226.08 267.451 236.779 268.721 247.805C269.277 250.771 269.218 253.82 268.549 256.763C267.88 259.705 266.615 262.48 264.831 264.914Z"
                  fill="#5D35FF"
                />
              </svg>
            </div>
          </StyledRightContent>
        </div>
      </div>
    </StyledAbout>
  );
};

export default React.memo(About);
