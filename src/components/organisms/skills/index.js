import React from "react";
import Line from "../../atoms/line";
import {
  StyledWrapper,
  GreyReactLogo,
  GreyJavaScript,
  GreyHtml,
  GreyCss,
  GreyBootstrap,
  GreyRedux,
  GreyStyledComponents,
} from "./StyledSkills";

const Skills = () => {
  return (
    <>
      <StyledWrapper>
        <GreyHtml />
        <GreyCss />
        <GreyJavaScript />
        <GreyReactLogo />
        <GreyRedux />
        <GreyStyledComponents />
        <GreyBootstrap />
      </StyledWrapper>
      <Line />
    </>
  );
};

export default Skills;
