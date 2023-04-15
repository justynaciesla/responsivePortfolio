import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledColorContainer = styled.div`
  height: 80%;
  width: 80%;
  background-color: black;
  margin: 6.25rem auto;
  left: 0;
  right: 0;
  position: absolute;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 100px 0px 100px 0px;

  @media ${devices.devices.tablet} {
    flex-direction: column;
    margin: 30px 0px 0px 0px;
  }
`;
