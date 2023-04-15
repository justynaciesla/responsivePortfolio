import React from "react";
import Logo from "../../atoms/logo/index";
import GithubAndLinkedin from "../githubAndLinkedin";
import { StyledWrapper } from "./StyledFooter";

const Footer = () => {
  return (
    <StyledWrapper>
      <Logo />
      <GithubAndLinkedin background='#151515' />
    </StyledWrapper>
  );
};

export default Footer;
