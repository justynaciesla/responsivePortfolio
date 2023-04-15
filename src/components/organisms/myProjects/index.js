import React from "react";
import Header from "../../atoms/headers";
import Line from "../../atoms/line";
import ProjectBox from "../../molecules/projectsBox";
import TourismSpace from "../../../assets/img/img/spaceTourism.png";
import FurnitureShop from "../../../assets/img/img/furintureShop.png";
import InteractiveCard from "../../../assets/img/img/interactiveCard.png";
import Movies from "../../../assets/img/img/topMovies.png";
import CookBook from "../../../assets/img/img/cookbook.png";
import Cookie from "../../../assets/img/img/animatedCookie.png";
import {
  StyledWrapper,
  StyledSpan,
  StyledProjectWrapper,
} from "./StyledMyProjects";

const MyProjects = () => {
  return (
    <>
      <StyledWrapper>
        <Header headerType='h3' color='white'>
          My <StyledSpan>projects</StyledSpan>
        </Header>
        <StyledProjectWrapper>
          <ProjectBox
            photoSrc={TourismSpace}
            title='SPACE TOURISM'
            demo='https://space-tourism-challange.netlify.app/'
            githublink='https://github.com/justynaciesla/space-tourism-website'
          />
          <ProjectBox
            photoSrc={FurnitureShop}
            title='FURNITURE SHOP'
            demo='https://furniture-shop-react.netlify.app/'
            githublink='https://github.com/justynaciesla/furnitureShop'
          />
          <ProjectBox
            photoSrc={InteractiveCard}
            title='INTERACTIVE CARD'
            demo='https://interactive-card-desktop.netlify.app/'
            githublink='https://github.com/justynaciesla/interactiveCard'
          />
          <ProjectBox
            photoSrc={Movies}
            title='TOP MOVIES'
            demo='https://top-movies-app-react.netlify.app/'
            githublink='https://github.com/justynaciesla/movies'
          />
          <ProjectBox
            photoSrc={Cookie}
            title='ANIMATED COOKIE'
            demo='https://animated-cookie.netlify.app/'
            githublink='https://github.com/justynaciesla/animatedCookie'
          />
          <ProjectBox
            photoSrc={CookBook}
            title='COOK BOOK'
            demo='https://coookboook.netlify.app/'
            githublink='https://github.com/justynaciesla/cookbook'
          />
        </StyledProjectWrapper>
      </StyledWrapper>
      <Line />
    </>
  );
};

export default MyProjects;
