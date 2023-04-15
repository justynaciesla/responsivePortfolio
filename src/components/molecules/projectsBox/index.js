import React from "react";
import {
  StyledImg,
  StyledWrapper,
  StyledA,
  StyledButtonsWrapper,
} from "./styledProjectBox";
import Header from "../../atoms/headers/index";

const ProjectBox = ({ title, photoSrc, githublink, demo }) => {
  return (
    <div>
      <StyledImg src={photoSrc} alt='tourism' />
      <Header headerType='h5' color='white' margin='0px 0px 10px 0px'>
        {title}
      </Header>

      <StyledWrapper>
        <Header headerType='h6' color='white'>
          HTML
        </Header>
        <Header headerType='h6' color='white'>
          CSS
        </Header>
        <Header headerType='h6' color='white'>
          JAVASCRIPT
        </Header>
      </StyledWrapper>

      <StyledButtonsWrapper>
        <StyledA href={demo} target='_blank'>
          VIEW PROJECT
        </StyledA>
        <StyledA href={githublink} target='_blank'>
          VIEW CODE
        </StyledA>
      </StyledButtonsWrapper>
    </div>
  );
};

export default ProjectBox;
