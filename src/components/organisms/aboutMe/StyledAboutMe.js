import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 3rem auto 40px auto;

  @media ${devices.devices.tablet} {
    width: 85%;
  }
`;

export const StyledSpan = styled.span`
  color: rgb(203, 62, 166);
`;

export const StyledP = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: justify;
  line-height: 2;

  @media ${devices.devices.tablet} {
    line-height: 1.5;
  }
`;
