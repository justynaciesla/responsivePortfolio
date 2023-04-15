import React from "react";
import { StyledWrapper } from "./StyledContactContent";
import ContactCircle from "../../molecules/contactCircle";
import ContactForm from "../../molecules/contactForm";
import Line from "../../atoms/line";

const ContactContent = () => {
  return (
    <>
      <StyledWrapper id='contactMe'>
        <ContactCircle />
        <ContactForm />
      </StyledWrapper>
      <Line />
    </>
  );
};

export default ContactContent;
