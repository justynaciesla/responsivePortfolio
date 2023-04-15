import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledWrapper = styled.div`
  display: flex;
  margin: 3.75rem 0rem 0rem 6.25rem;
  z-index: 9;

  @media ${devices.devices.mobile} {
    margin: 20px 0px 0px 0px;
  }
`;

export const StyledImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
