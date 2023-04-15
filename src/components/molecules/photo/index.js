import React from "react";
import MyPhoto from "../../../assets/img/img/meblack.png";
import { StyledPhotoBackground, StyledImg } from "./StyledPhoto";

const Photo = () => {
  return (
    <StyledPhotoBackground>
      <StyledImg alt='me' src={MyPhoto}></StyledImg>
    </StyledPhotoBackground>
  );
};

export default Photo;
