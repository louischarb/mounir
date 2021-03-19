import React from "react";
import {
  Button,
  Container,
  RightContainer,
  Title,
  Positioner,
  Logo,
} from "./styles";
import { headerStateProps } from "../../redux";
import { useSelector } from "react-redux";
import { _routes } from "../../constants";
import { Link, useLocation } from "react-router-dom";

const HeaderBar: React.FunctionComponent = (): JSX.Element => {
  const backgroundIsActive = useSelector(
    (state: headerStateProps): boolean => state.backgroundIsActive
  );
  const location = useLocation()
  const pathName = location?.pathname
  return (
    <Positioner backgroundIsActive={backgroundIsActive}>
      <Container>
        <Title>mounirsakrane.</Title>
        <Logo />
        <RightContainer>
          <Link to={_routes.HOME}>
            <Button
              active={
                pathName === _routes.PROJECT || pathName === _routes.HOME
              }
            >
              work
            </Button>
          </Link>
          <Link to={_routes.ABOUT}>
            <Button active={
                pathName === _routes.ABOUT
              }
            >
              about</Button>
          </Link>
          <Button active={false}>contact</Button>
        </RightContainer>
      </Container>
    </Positioner>
  );
};

export default HeaderBar;
