import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { StyledWrapper } from "./StyledContactContent";
import ContactCircle from "../../molecules/contactCircle";
import ContactForm from "../../molecules/contactForm";
import Line from "../../atoms/line";

const ContactContent = () => {
  const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "power1.out" },
  });
  const StyledContainer = useRef();

  useEffect(() => {
    tl.fromTo(
      StyledContainer.current,
      { scale: 1.4, borderRadius: "0rem" },
      {
        scale: 1,
        borderRadius: "2rem",
        delay: 0.35,
        duration: 2.5,
        ease: "elastic.out(1.5,1)",
      }
    );
  }, []);

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
