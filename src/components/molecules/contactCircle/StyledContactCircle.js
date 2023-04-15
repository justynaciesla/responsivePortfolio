import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledCircle = styled.div`
  background-image: linear-gradient(
    180deg,
    rgb(203, 62, 166),
    rgb(63, 108, 180)
  );
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: flex-start;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media ${devices.devices.tablet} {
    display: none;
  }
`;

export const StyledWrapper = styled.div``;

export const StyledSpan = styled.span`
  color: rgb(203, 62, 166);

  @media ${devices.devices.tablet} {
  }
`;
