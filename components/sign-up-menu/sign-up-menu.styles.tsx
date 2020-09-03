import styled from "styled-components";
import colors from "styled/colors";

export const Container = styled.div<{}>`
  width: 220px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ErrorBox = styled.div`
  color: ${colors.red};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  font-weight: 100;
  font-size: 0.7em;
  text-align: center;
`;
