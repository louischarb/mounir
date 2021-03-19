import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slide from "./slide";
import {
  headerStateProps,
  setBackgroundIsActiveFalse,
  setBackgroundIsActiveTrue,
  setActualPage,
} from "../../redux";
import { useEffect } from "react";
import { _routes } from "../../constants";

export { SlideItem } from "./SlideItem";

interface ICarousselProps {
  children: Array<JSX.Element>;
}

const Caroussel = ({ children }: ICarousselProps): JSX.Element => {
  const [actualSlide, setActualSlide] = useState<number>(0);
  const [isProjectVisible, setIsProjectVisible] = useState<boolean>(false);
  const backgroundIsActive = useSelector(
    (state: headerStateProps) => state.backgroundIsActive
  );
  const actualPage = useSelector((state: headerStateProps) => state.actualPage);
  const dispatch = useDispatch();

  useEffect((): void => {
    if (actualPage !== _routes.PROJECT && isProjectVisible)
      dispatch(setActualPage(_routes.PROJECT));
    else if (actualPage !== _routes.HOME && !isProjectVisible)
      dispatch(setActualPage(_routes.HOME));
  });

  const handlePrevious = (): void => {
    setActualSlide(actualSlide - 1);
  };
  const handleNext = (): void => {
    setActualSlide(actualSlide + 1);
  };

  const handleWheel = (e: object): void => {
    !isProjectVisible && setIsProjectVisible(!isProjectVisible);
  };

  const handleScroll = (e: any): void => {
    const scrollTop = e?.target?.scrollTop;
    if (scrollTop > 150 && !backgroundIsActive)
      dispatch(setBackgroundIsActiveTrue());
    else if (scrollTop === 0 && backgroundIsActive)
      dispatch(setBackgroundIsActiveFalse());
  };

  const goNext = (): void => {
    setActualSlide(actualSlide + 1);
  };

  const goPrevious = (): void => {
    setActualSlide(actualSlide - 1);
  };

  const childrenProps = children[actualSlide]?.props;
  if (actualSlide > children.length) return <div>Error</div>;
  else
    return (
      <Slide
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        onWheel={handleWheel}
        onScroll={handleScroll}
        actualSlide={actualSlide}
        background={childrenProps.background}
        isProjectVisible={isProjectVisible}
        goNext={goNext}
        goPrevious={goPrevious}
      >
        {children}
      </Slide>
    );
};

export default Caroussel;
