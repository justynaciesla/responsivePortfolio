import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 15.6rem 0rem 15.6rem;

  @media ${devices.devices.tablet} {
    padding: 0px;
    margin: 0px 0px 0px 40px;
  }
`;

export const StyledSpan = styled.span`
  color: rgb(203, 62, 166);
`;

export const StyledP = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: justify;
  line-height: 1.5;
`;

export const StyledProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
`;
