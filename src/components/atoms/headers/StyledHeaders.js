import styled from "styled-components";
import { devices } from "./../../../devices/devices";

export const StyledH1 = styled.h1`
  font-family: "Roboto", sans-serif;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "4rem" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  overflow: ${({ overflow = "hidden" }) => overflow};
  display: ${({ display = "flex" }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};

  @media ${devices.devices.tablet} {
    display: ${({ display = "inline" }) => display};
    font-size: ${({ fontSize = "3.4rem" }) => fontSize};
  }

  @media ${devices.devices.mobile} {
    display: ${({ display = "inline" }) => display};
    font-size: ${({ fontSize = "2.5rem" }) => fontSize};
  }
`;

export const StyledH2 = styled.h2`
  font-family: "Roboto", sans-serif;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "3.1rem" }) => fontSize};
  font-weight: ${({ fontWeight = "300" }) => fontWeight};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
`;

export const StyledH3 = styled.h3`
  font-family: "Roboto", sans-serif;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "2.5rem" }) => fontSize};
  font-weight: ${({ fontWeight = "300" }) => fontWeight};
  margin: ${({ margin = "0px 0px 60px 0px" }) => margin};

  @media ${devices.devices.tablet} {
    font-size: ${({ fontSize = "2.5rem" }) => fontSize};
    margin: ${({ margin = "0px 0px 30px 0px" }) => margin};
  }
`;

export const StyledH4 = styled.h4`
  font-family: "Roboto", sans-serif;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "2.2rem" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin }) => margin};
`;

export const StyledH5 = styled.h5`
  font-family: "Roboto", sans-serif;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "1.4rem" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "50px 0px 50px 0px" }) => margin};

  @media ${devices.devices.tablet} {
    font-size: ${({ fontSize = "1.2rem" }) => fontSize};
  }

  @media ${devices.devices.mobile} {
    font-size: ${({ fontSize = "1.6rem" }) => fontSize};
    margin: 20px 0px 20px 0px;
  }
`;

export const StyledH6 = styled.h6`
  font-family: "Roboto", sans-serif;
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "0.8rem" }) => fontSize};
  font-weight: ${({ fontWeight = "300" }) => fontWeight};
  margin: ${({ margin }) => margin};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};

  @media ${devices.devices.tablet} {
    font-size: ${({ fontSize = "0.7rem" }) => fontSize};
  }
`;
