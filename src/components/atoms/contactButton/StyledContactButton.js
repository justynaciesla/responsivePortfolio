import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledA = styled.a`
  display: flex;
  text-decoration: none;
  color: white;
  letter-spacing: 3px;
  margin: 20px 0px 70px 0px;
  text-decoration-line: underline;
  text-underline-offset: 10px;
  text-decoration-color: rgb(203, 62, 166);
  text-decoration-thickness: 3px;

  @media ${devices.devices.tablet} {
    margin: 40px 0px 50px 20px;
    justify-content: flex-start;
  }

  @media ${devices.devices.mobile} {
    justify-content: center;
  }
`;
