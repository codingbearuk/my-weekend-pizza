import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div`
  max-width: 100vw;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin: 50px 10%;
  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;

export const MapContainer = styled.div`
  iframe {
    border: none;
    border-radius: 20px;
    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: ${colors.yellow};
    text-align: left;
  }
  h3 {
    font-family: 'bradley hand';
    margin: 0;
    padding: 0;
    font-size: 1.3em;
  }
  div {
    display: flex;
    align-items: center;
    svg {
      color: ${colors.yellow};
      font-size: 1.5em;
    }
    p {
      padding: 0;
      margin: 0;
    }
  }
  @media (max-width: 500px) {
    align-items: center;
  }
`;
