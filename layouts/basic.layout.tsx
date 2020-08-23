import React, { FunctionComponent } from "react";
import GlobalStyle from "../styled/global.styles";

const BasicLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
