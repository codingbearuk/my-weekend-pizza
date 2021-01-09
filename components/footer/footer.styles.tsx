import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.footer`
  width: 100%;
  background: url('/images/Image1@2x.png');
  background-position: right;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Content = styled.div`
  background: ${colors.semiTransparetnWhite};
  backdrop-filter: blur(8px);
  width: 100%;
  height: 100%;
  padding: 30px 10%;
  h1 {
    color: ${colors.red};
    font-family: 'helvetica';
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid ${colors.red};
  border-radius: 10px;
  flex: 1;
  background: none;
  outline: none;
  color: ${colors.yellow};
  resize: none;
  ::placeholder {
    color: ${colors.yellow};
    margin: 10px;
  }
  :focus {
    background: ${colors.red};
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  section {
    flex: 1;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    section {
      margin-bottom: 20px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  border: 1px solid ${colors.red};
  border-radius: 5px;
  padding: 10px;
  background: ${colors.red};
  color: ${colors.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none !important;
  p {
    margin: 0;
    margin-left: 10px;
  }
`;

export const SentMsg = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 5px;
  background: ${colors.background};
  font-size: 0.7em;
  a {
    color: ${colors.white};
    :hover {
      ${colors.red};
    }
  }
`;
