import React from "react";
import { SlideItemTitle, DesignedText, SlideItemContainer } from "./styles";

interface SlideItemProps {
  title: string;
  background: string;
  isActive?: boolean;
}

export const SlideItem = ({ title, isActive }: SlideItemProps): JSX.Element => {
  return (
    <SlideItemContainer>
      <SlideItemTitle>{title}</SlideItemTitle>
      {isActive && <DesignedText>Designed by Mounir Sakrane</DesignedText>}
    </SlideItemContainer>
  );
};
