import styled from "styled-components";
import { devices } from "../../../devices/devices";
import { Field, Form } from "formik";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media ${devices.devices.tablet} {
    align-items: center;
    justify-content: center;
  }

  @media ${devices.devices.mobile} {
    justify-content: center;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem;
  margin-top: -1.9rem;

  @media ${devices.devices.tablet} {
    margin-top: 50px;
  }

  @media ${devices.devices.mobile} {
    justify-content: center;
    margin-left: 100px;
  }
`;

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  color: white;
`;

export const StyledField = styled(Field)`
  width: 12.5rem;
  padding: 0.6rem 0.6rem 0.6rem 0rem;
  outline: 0;
  border-width: 0 0 0.1rem;
  border-color: rgb(203, 62, 166);
  font-size: 0.8rem;
  color: white;
  opacity: 0.8;

  @media ${devices.devices.tablet} {
    width: 90%;
  }

  @media ${devices.devices.mobile} {
    width: 70%;
  }
`;

export const StyledMessageFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 2rem 5.1rem;
`;

export const StyledMessageField = styled(Field)`
  font-family: "Roboto", sans-serif;
  width: 21.8rem;
  height: 4.4rem;
  margin: 0.6rem 0rem 0rem 0rem;
  outline: 0;
  border-width: 0 0 2px;
  border-color: rgb(203, 62, 166);
  opacity: 0.8;
  font-size: 0.8rem;
  color: white;
  resize: none;

  @media ${devices.devices.tablet} {
    width: 90%;
  }

  @media ${devices.devices.mobile} {
    width: 70%;
  }
`;

export const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  background-color: #d1e9e3;
  width: 50%;
`;

export const StyledErrorWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  color: rgb(203, 62, 166);
  opacity: 0.8;
  font-size: 0.75rem;
  margin: 0.2rem 0rem 1.25rem 0rem;
  width: 25rem;
`;

export const StyledButton = styled.button`
  color: white;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;

  @media ${devices.devices.tablet} {
    margin: 40px 0px 4px 0px;
  }
`;

export const StyledImg = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  margin: 0rem 0rem 0rem 0.6rem;
`;
