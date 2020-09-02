import styled from "styled-components";
import colors from "styled/colors";

export const Container = styled.div<{}>`
  width: 200px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ArrowButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
