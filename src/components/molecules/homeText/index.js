import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../../atoms/headers";
import ContactButton from "../../atoms/contactButton/index";
import {
  StyledTextWrapper,
  StyledFirstTextWrapper,
  StyledSpan,
  StyledPinkSpan,
  StyledWrapper,
  StyledP,
  StyledMainWrapper,
} from "./StyledHomeText";

const HomeText = () => {
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "power1.out" },
  });
  const CreativeText = useRef();

  useEffect(() => {
    tl.fromTo(
      CreativeText.current,
      { x: 300, opacity: 0.5 },
      { x: 0, opacity: 1 },
      "<90%"
    );
  }, []);

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
