import styled from "styled-components";
import { _colors } from "../../constants";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${_colors.lightGrey};
  font-weight: bold;
  font-family: sans-serif;
  height: 50px;
`;

export const Large = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Center = styled.div`
  border-left: 1px solid ${_colors.lightGrey};
  border-right: 1px solid ${_colors.lightGrey};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  &:hover {
    cursor: pointer;
  }
`;
