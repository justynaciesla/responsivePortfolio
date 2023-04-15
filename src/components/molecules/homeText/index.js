import React from "react";

import Header from "../../atoms/headers";
import ContactButton from "../../atoms/contactButton/index";
import {
  StyledTextWrapper,
  StyledFirstTextWrapper,
  StyledSpan,
  StyledPinkSpan,
  StyledMainWrapper,
} from "./StyledHomeText";

const HomeText = () => {
  return (
    <StyledMainWrapper>
      <StyledTextWrapper>
        <StyledFirstTextWrapper>
          <Header headerType='h1' overflow='hidden' margin='0' padding='0'>
            <StyledSpan>Nice to meet you!</StyledSpan>
          </Header>
        </StyledFirstTextWrapper>
        <StyledFirstTextWrapper>
          <Header headerType='h1' margin='0' padding='0'>
            <StyledSpan>I'm</StyledSpan>
            <StyledPinkSpan>Justyna Ciesla</StyledPinkSpan>
            <StyledSpan>.</StyledSpan>
          </Header>
        </StyledFirstTextWrapper>
      </StyledTextWrapper>
      <ContactButton />
    </StyledMainWrapper>
  );
};

export default HomeText;
