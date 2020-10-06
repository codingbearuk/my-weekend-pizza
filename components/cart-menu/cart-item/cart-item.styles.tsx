import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.background};
  border-radius: 10px;
  padding: 10px 5px;
  margin-bottom: 15px;
  position: relative;
  img {
    width: 80%;
  }
  h2 {
    color: ${colors.yellow};
    font-size: 1em;
    margin: 0;
  }
  p {
    font-family: 'bradley hand';
    color: ${colors.red};
    font-size: 1.2em;
    margin: 0;
  }
`;

export const Circe = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  color: ${colors.background};
  background: ${colors.white};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;
