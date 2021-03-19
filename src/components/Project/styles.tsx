import styled from "styled-components";
import { _colors, _config } from "../../constants";

export const Title = styled.span``;
export const Description = styled.div`
  width: calc(100% - ${_config.marge}px * 6);
  margin-left: ${_config.marge * 3}px;
  font-size: 38px;
  font-family: sans-serif;
`;
export const Date = styled.span``;
export const Category = styled.span``;
export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
`;
interface ProjectBackgroundProps {
  background?: string;
}
export const ProjectBackground = styled.div`
  width: 100%;
  height: 75%;
  background-image: url(${(props: ProjectBackgroundProps) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
`;
export const Breadcrumb = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${_colors.lightGrey};
  color: ${_colors.grey};
  font-family: sans-serif;
  font-size: 12px;
  padding: 5px 0px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - ${_config.marge * 6}px);
  margin-left: ${_config.marge * 3}px;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;
export const CardTitle = styled.span`
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: 20px;
`;

export const CardText = styled.span`
  font-family: sans-serif;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  box-shadow: 3px 7px 14px 0px ${_colors.lightGrey};
  margin-bottom: 20px;
`;
