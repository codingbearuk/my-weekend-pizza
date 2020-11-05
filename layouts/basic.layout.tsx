import React, { FunctionComponent, useEffect } from 'react';
import GlobalStyle from '../styled/global.styles';
import { Head } from 'next/document';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/reducers/index';
import Popup from 'components/UI/popup';
import { colsePopup } from 'redux/actions/popup.action';
import { loginUser } from 'redux/actions/login.action';
import { setPageScrollTrue, setPageScrollFalse } from 'redux/actions/page-scroll.actions';
import { setMobile, setDesktop } from 'redux/actions/device.action';
import { loginEventHandle, LoginEvent } from 'utils/custom-events/login.event';
import { handleLogoutEvent } from 'utils/custom-events/logout.event';

const BasicLayout: FunctionComponent = ({ children }) => {
  const isPopupOpen: boolean = useSelector((s: RootState) => s.popup.isOpen);
  const popupTitle: string = useSelector((s: RootState) => s.popup.title);
  const popupMsg: string = useSelector((s: RootState) => s.popup.msg);
  const dispatch = useDispatch();

  const loginListener = (): void => {
    window.addEventListener('login', (e: LoginEvent) => {
      loginEventHandle(e.detail.sessionID);
      dispatch(loginUser());
    });
  };

  const logoutListener = (): void => {
    window.addEventListener('logout', () => {
      handleLogoutEvent();
    });
  };

  const loginUserIfSessionID = (): void => {
    const id: string = localStorage.getItem('sessionID');
    if (id) dispatch(loginUser());
  };

  const handlePageScroll = (): void => {
    const getScroll = () => {
      const scrollPosition: number = window.scrollY;
      if (scrollPosition >= 150) dispatch(setPageScrollTrue());
      else dispatch(setPageScrollFalse());
    };
    getScroll();
    document.addEventListener('scroll', getScroll);
  };

  const setDevice = (): void => {
    const setDevice = (): void => {
      const displayWidth = window.innerWidth;
      if (displayWidth > 500) dispatch(setDesktop());
      else dispatch(setMobile());
    };
    setDevice();
    window.addEventListener('resize', setDevice);
  };

  useEffect(() => {
    loginListener();
    loginUserIfSessionID();
    logoutListener();
    handlePageScroll();
    setDevice();
  }, []);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default BasicLayout;
