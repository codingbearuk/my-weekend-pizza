import styled from "styled-components";
import colors from "styled/colors";

export const Container = styled.div<{ color?: string }>`
  color: ${(p) => p.color || colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  outline: none;

  svg {
    color: ${(p) => p.color || colors.white};
  }
`;
