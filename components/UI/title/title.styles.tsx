import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div<{}>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 30px;
  :after {
    content: '';
    width: 80%;
    border-bottom: 2px solid ${colors.white};
    position: absolute;
    bottom: 0;
  }
  h1 {
    font-size: 2.2em;
    margin: 0;
    padding: 0;
    margin-right: 5px;
  }
  img {
    height: 2.2em;
  }
`;
