import styled from "styled-components";
import colors from "styled/colors";

export const Container = styled.div<{
  positionLeft: number;
  buttonWidth: number;
}>`
  background: ${colors.transparetnWhite};
  backdrop-filter: blur(10px);
  border-radius: 5px;
  position: fixed;
  top: 70px;
  left: ${(p) => p.positionLeft + p.buttonWidth / 2}px;
  transform: translateX(-50%);
  overflow: hidden;
  height: 0;
`;

export const AroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 100px;
  left: 0;
`;
