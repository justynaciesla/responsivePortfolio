import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media ${devices.devices.mobile} {
    display: flex;
    flex-direction: column-reverse;
    margin-top: -30px;
  }
`;
