import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.footer`
  width: 100%;
  background: url('/images/Image1@2x.png');
  background-position: right;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 300px;
`;

export const Content = styled.div`
  background: ${colors.semiTransparetnWhite};
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  padding: 20px 10%;
  h1 {
    color: ${colors.red};
    font-family: 'helvetica';
  }
`;

export const InputsContainer = styled.div``;
