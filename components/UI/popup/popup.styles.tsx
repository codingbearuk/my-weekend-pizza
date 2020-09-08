import styled from "styled-components";
import colors from "styled/colors";

export const Container = styled.div<{}>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.transparetnWhite};
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Wrapper = styled.div<{}>`
  width: 500px;
  box-shadow: 0 0 30px 2px ${colors.black};
  border-radius: 5px;
`;

export const TopBar = styled.div<{}>`
  background: ${colors.red};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px 5px 0 0;
  padding: 10px;
  p {
    color: ${colors.white};
    margin: 0;
    display: flex;
    justify-content: center;
  }
`;

export const Content = styled.div<{}>`
  width: 100%;
  background: ${colors.white};
  border-radius: 0 0 5px 5px;
  text-align: center;
  color: ${colors.red};
  padding: 20px 10px;
`;
