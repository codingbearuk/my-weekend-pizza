import styled from "styled-components";
import colors from "styled/colors";

export const Container = styled.button<{ color?: string }>`
  border: 1px solid ${(p) => p.color || colors.white};
  border-radius: 5px;
  padding: 5px 20px;
  background: none;
  color: ${(p) => p.color || colors.white};
  cursor: pointer;
`;
