import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 0px 0px 40px 0px;

  @media ${devices.devices.tablet} {
    margin: 0px 30px 0px 30px;
    justify-content: space-between;
  }

  @media ${devices.devices.mobile} {
    flex-direction: column;
    align-items: center;
    margin: 20px 0px 0px 5px;
  }
`;
