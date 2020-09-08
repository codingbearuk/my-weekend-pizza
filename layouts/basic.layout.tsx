import React, { FunctionComponent } from "react";
import GlobalStyle from "../styled/global.styles";
import { Provider, useSelector, useDispatch } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import { RootState } from "redux/reducers/index";
import Popup from "components/UI/popup";
import { colsePopup } from "redux/actions/popup.action";

const BasicLayout: FunctionComponent = ({ children }) => {
  const isPopupOpen: boolean = useSelector((s: RootState) => s.popup.isOpen);
  const popupTitle: string = useSelector((s: RootState) => s.popup.title);
  const popupMsg: string = useSelector((s: RootState) => s.popup.msg);
  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <GlobalStyle />
      {isPopupOpen && (
        <Popup
          close={() => {
            dispatch(colsePopup());
          }}
          title={popupTitle}
          msg={popupMsg}
        />
      )}
      {children}
    </Provider>
  );
};

const makeStore = () => store;
export default withRedux(makeStore)(BasicLayout);
