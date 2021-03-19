import React from "react";
import Project from "../Project";
import {
  PageContainer,
  SlideContainer,
  ActualSlideContent,
  SlideContentLeft,
  SlideContentRight,
  SliderPointerContainer,
  SliderPointer,
} from "./styles";
import { Projects } from "../../datas";

interface ISlideProps {
  children: Array<JSX.Element>;
  handlePrevious: () => void;
  handleNext: () => void;
  onWheel: (e: object) => void;
  onScroll: (e: object) => void;
  actualSlide: number;
  background: string;
  isProjectVisible: boolean;
  goNext: () => void;
  goPrevious: () => void;
}

const Slide = ({
  children,
  handlePrevious,
  handleNext,
  onWheel,
  onScroll,
  actualSlide,
  background,
  isProjectVisible,
  goNext,
  goPrevious,
}: ISlideProps): JSX.Element => {
  const actual = children[actualSlide];
  const previous = children[actualSlide - 1];
  const next = children[actualSlide + 1];
  const getFirstWord = (text: string): string => {
    return text.substring(0, text.indexOf(" "));
  };
  return (
    <PageContainer
      isProjectVisible={isProjectVisible}
      onWheel={onWheel}
      onScroll={onScroll}
    >
      <SlideContainer
        background={background}
        isProjectVisible={isProjectVisible}
      >
        {actualSlide > 0 && (
          <SlideContentLeft onClick={handlePrevious}>
            {React.cloneElement(previous, {
              title: getFirstWord(previous.props.title),
            })}
          </SlideContentLeft>
        )}
        <ActualSlideContent>
          {React.cloneElement(actual, { isActive: true })}
        </ActualSlideContent>
        {actualSlide < children.length - 1 && (
          <SlideContentRight onClick={handleNext}>
            {React.cloneElement(next, {
              title: getFirstWord(next.props.title),
            })}
          </SlideContentRight>
        )}
        <SliderPointerContainer>
          {children.map((item, i) => {
            return <SliderPointer key={i} isActive={i === actualSlide} />;
          })}
        </SliderPointerContainer>
      </SlideContainer>
      {isProjectVisible && (
        <Project
          actualSlide={actualSlide}
          previous={actualSlide > 0}
          next={actualSlide < children.length - 1}
          goNext={goNext}
          goPrevious={goPrevious}
        />
      )}
    </PageContainer>
  );
};

export default Slide;
