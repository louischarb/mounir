import styled from "styled-components";
import { ABOUT_IMG } from "../../datas";
import { _colors, _config } from "../../constants";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SubContainer = styled.div`
  width: calc(100% - ${_config.marge * 4}px);
  padding: ${_config.marge / 2}px ${_config.marge * 2}px;
`;

export const AboutImg = styled.div`
  width: 100%;
  height: 45%;
  background-image: url(${ABOUT_IMG});
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

export const Description = styled.p`
  color: ${_colors.darkGrey};
  font-family: sans-serif;
  font-size: 24px;
`;

export const Row = styled.div`
  width: 100%;
  padding: 10px 0px;
`;

export const Subtitle = styled.span`
  color: ${_colors.black};
  font-weight: bold;
  font-family: sans-serif;
`;

export const Title = styled.span`
  color: ${_colors.black};
  font-weight: bold;
  font-family: sans-serif;
  font-size: 28px;
`;

export const Text = styled.p`
  color: ${_colors.darkGrey};
  font-family: sans-serif;
`;
