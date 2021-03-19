import styled from "styled-components";
import { _colors, _config } from "../../constants";

interface PageContainerProps {
  isProjectVisible: boolean;
}
export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: ${(props: PageContainerProps) =>
    props.isProjectVisible ? "auto" : "hiden"};
`;
interface SlideContainerProps {
  background: string;
  isProjectVisible: boolean;
}

export const SlideContainer = styled.div`
  display: flex;
  opacity: ${(props: SlideContainerProps) =>
    props.isProjectVisible ? "0" : "1"};
  justify-content: center;
  align-items: center;
  width: calc(100% - ${_config.marge * 2}px);
  height: ${(props: SlideContainerProps): string =>
    props.isProjectVisible ? "0px;" : `calc(100% - ${_config.marge * 2}px);`}
  padding: ${(props: SlideContainerProps) =>
    props.isProjectVisible ? 0 : _config.marge}px;
  background-image: url(${(props: SlideContainerProps): string =>
    props.background});
  background-repeat: no-repeat;
  background-size: cover;
  transition: height 1s, opacity 0.5s;
  transition-delay: 0s, 0s, 0.75s;
  transition-property: height, opacity, padding;
`;
export const ActualSlideContent = styled.div`
  width: 100%%;
`;
export const SlideContentLeft = styled.div`
  position: absolute;
  left: ${_config.marge}px;
  display: flex;
  opacity: 0.6;
  justify-content: flex-end;
  transform: scale(0.9);
  transition: opacity 0.3s, transform 0.3s;
  transition: ease all 0.75s;
  @media (max-width: 1450px) {
    left: ${_config.marge1450}px;
  }
  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1);
  }
`;
export const SlideContentRight = styled.div`
  position: absolute;
  right: ${_config.marge}px;
  display: flex;
  opacity: 0.6;
  justify-content: flex-end;
  transform: scale(0.9);
  transition: opacity 0.3s, transform 0.3s;
  transition: ease all 0.75s;
  @media (max-width: 1450px) {
    right: ${_config.marge1450}px;
  }
  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1);
  }
`;
export const SlideItemTitle = styled.h2`
  color: ${_colors.white};
  font-size: 84px;
  font-family: sans-serif;
`;
export const SliderPointerContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: ${_config.marge}px;
  right: ${_config.marge}px;
  transition: ease all 0.75s;
  @media (max-width: 1450px) {
    bottom: ${_config.marge1450}px;
    right: ${_config.marge1450}px;
  }
`;
interface SliderPointerProps {
  isActive: boolean;
}
export const SliderPointer = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: ${(props: SliderPointerProps) =>
    props.isActive ? _colors.white : _colors.grey};
  margin-right: 5px;
  opacity: ${(props: SliderPointerProps) => (props.isActive ? 1 : 0.7)};
`;
export const DesignedText = styled.span`
  color: ${_colors.white};
  font-weight: bold;
  font-family: sans-serif;
`;
export const SlideItemContainer = styled.div`
  text-align: center;
`;
