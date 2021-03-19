import styled from "styled-components";
import { _colors, _config } from "../../constants";

export const Container = styled.div`
  width: calc(100% - ${_config.marge * 2}px);
  background-color: ${_colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px ${_config.marge}px;
`;

export const Left = styled.span`
  color: ${_colors.white};
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
`;

export const Right = styled.span`
  color: ${_colors.white};
  font-family: sans-serif;
  font-size: 20px;
`;
