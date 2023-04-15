import React from "react";
import { StyledA } from "./StyledLink";

const Link = ({
  linkType,
  children,
  to,
  color,
  fontFamily,
  fontSize,
  margin,
  textDecoration,
  onClickFn,
  backgroundColor,
}) => {
  const _renderLink = () =>
    linkType === "a" ? (
      <StyledA
        backgroundColor={backgroundColor}
        textDecoration={textDecoration}
        href={to}
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        margin={margin}
        onClickFn={onClickFn}>
        {children}
      </StyledA>
    ) : (
      <StyledA
        backgroundColor={backgroundColor}
        textDecoration={textDecoration}
        href={to}
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        margin={margin}
        onClickFn={onClickFn}>
        {children}
      </StyledA>
    );

  return <>{_renderLink()}</>;
};

export default Link;
