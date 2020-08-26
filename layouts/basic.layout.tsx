import React, { FunctionComponent } from "react";
import GlobalStyle from "../styled/global.styles";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";

const BasicLayout: FunctionComponent = ({ children }) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      {children}
    </Provider>
  );
};

const makeStore = () => store;
export default withRedux(makeStore)(BasicLayout);
