import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledPhotoBackground = styled.div`
  background-color: #242424
  width: 18rem;
  height: 18rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  background-color: #242424;
  width: 28rem;
  height: 38rem;
  object-fit: contain;
  position: relative;

  @media ${devices.devices.tablet} {
    width: 25rem;
    height: 35rem;
  }

  @media ${devices.devices.mobile} {
    width: 15rem;
    height: 20rem;
  }
`;
