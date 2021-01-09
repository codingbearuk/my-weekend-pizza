import styled, { css } from "styled-components";
import colors from "styled/colors";

export const Container = styled.div<{}>`
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;

export const ItemsNumberContainer = styled.div<{ size?: number }>`
  color: ${colors.white};
  font-size: ${(p) => p.size + "px" || "1.2rem"};
`;
