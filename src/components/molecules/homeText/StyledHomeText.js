import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0px 70px 0px;
  line-height: 1.5;
  
  @media ${devices.devices.tablet} {
    margin: 40px 0px 40px 0px;
    line-height: 1.5
  }

  @media ${devices.devices.mobile} {
    line-height: 1.5
    margin: 0px 0px 40px 0px;
  }
`;

export const StyledFirstTextWrapper = styled.div`
  display: flex;

  @media ${devices.devices.tablet} {
    margin: 0px 0px 0px 20px;
    justify-content: center;
  }
`;

export const StyledSpan = styled.span`
  color: white;
`;

export const StyledPinkSpan = styled.span`
  color: rgb(203, 62, 166);
  margin-left: 1rem;
  display: inline;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.devices.tablet} {
    margin: 0px 20px;
    justify-content: center;
  }

  @media ${devices.devices.mobile} {
    justify-content: center;
    margin: 0px 40px;
  }
`;

export const StyledP = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: justify;
  line-height: 2;
  margin: 0px 0px 50px 0px;

  @media ${devices.devices.tablet} {
    line-height: 1.5;
    margin: 0px 0px 20px 0px;
  }

  @media ${devices.devices.mobile} {
    display: inline;
  }
`;

export const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
