import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledImg = styled.img`
  height: 280px;
  width: 440px;
  margin: 10px 10px 10px 0px;

  @media ${devices.devices.tablet} {
    height: 200px;
    width: 300px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const StyledA = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: white;
  letter-spacing: 3px;
  margin: 20px 0px 70px 0px;
  text-decoration-line: underline;
  text-underline-offset: 10px;
  text-decoration-color: rgb(203, 62, 166);
  text-decoration-thickness: 3px;
  cursor: pointer;

  @media ${devices.devices.tablet} {
    font-size: 12px;
  }
`;
