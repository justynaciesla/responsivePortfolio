import React from "react";
import Header from "../../atoms/headers";
import { StyledWrapper, StyledSpan, StyledP } from "./StyledAboutMe";

const AboutMe = () => {
  return (
    <StyledWrapper>
      <Header headerType='h3' color='white'>
        About <StyledSpan>me</StyledSpan>
      </Header>
      <StyledP>
        Hi there, my name is Justyna Ciesla and I am frontend developer based in
        Zurich, Switzerland. I've been interested in frontend development for
        last year. I specialise in developing applications in React.js. I love
        styling components with styled-components, but Material UI and Bootstrap
        are not secret for me. I know ES6 standard and use it in every project.
        <br />I am an analyst type person and I love challanges. I pay attention
        to quality of my code and visual effect of it. I believe that code
        should be easy to understand. I am definietly a teamplayer. Cooperation
        with others gives me satisfaction and is also the chance to improve my
        skills.
      </StyledP>
    </StyledWrapper>
  );
};

export default AboutMe;
