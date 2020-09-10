import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(/images/Image1@2x.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 50;
`;

export const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
  height: 35%;
  z-index: 50;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;
