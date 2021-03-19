import styled from "styled-components";
import { _colors, _config } from "../../constants";

interface PositionerProps {
  backgroundIsActive: boolean;
}
export const Positioner = styled.div`
  position: fixed;
  width: calc(100% - ${_config.marge * 2}px);
  padding: ${_config.marge / 4}px ${_config.marge}px;
  transition: ease all 0.5s;
  background-color: ${(props: PositionerProps) =>
    props.backgroundIsActive ? _colors.black : "none"};
  @media (max-width: 1450px) {
    width: calc(100% - ${_config.marge1450 * 2}px);
    padding: ${_config.marge1450}px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
`;

export const Title = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: ${_colors.white};
`;

export const RightContainer = styled.div``;

interface ButtonProps {
  active: boolean;
}
export const Button = styled.span`
  margin: 0px 10px;
  font-size: 26px;
  font-weight: bold;
  color: ${_colors.white};
  opacity: ${(props: ButtonProps) => (props.active ? 1 : 0.7)};
  transition: opacity 0.75s;
  text-decoration: none;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
`;
