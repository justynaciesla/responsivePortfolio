import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledLine = styled.div`
  height: 1px;
  background: #979797;
  width: 80%;
  margin: 30px auto 30px auto;

  @media ${devices.devices.tablet} {
    width: 90%;
  }
`;
