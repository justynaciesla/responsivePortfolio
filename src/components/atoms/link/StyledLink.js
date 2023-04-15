import styled from "styled-components";

export const StyledA = styled.a`
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
  cursor: pointer;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
