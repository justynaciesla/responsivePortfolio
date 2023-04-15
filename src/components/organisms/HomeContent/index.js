import React from "react";
import Navbar from "../../molecules/navbar/index";
import HomeText from "../../molecules/homeText";
import Photo from "../../molecules/photo";
import { StyledWrapper } from "./StyledHomeContent";
import Line from "../../atoms/line";

const HomeContent = () => {
  return (
    <div>
      <Navbar />
      <StyledWrapper>
        <HomeText />
        <Photo />
      </StyledWrapper>
      <Line />
    </div>
  );
};

export default HomeContent;
