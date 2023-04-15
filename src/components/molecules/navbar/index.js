import React from "react";
import Logo from "../../atoms/logo/index";
import GithubAndLinkedin from "../githubAndLinkedin";
import { StyledWrapper } from "./styledNavbar";

const Navbar = () => {
  return (
    <StyledWrapper>
      <Logo />
      <GithubAndLinkedin background='rgb(36, 36, 36)' />
    </StyledWrapper>
  );
};

export default Navbar;
