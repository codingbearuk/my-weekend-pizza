import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setActive } from 'redux/actions/change-address.action';
import { menuOFF } from 'redux/actions/navigation.actions';
import { dispatchLogout } from 'utils/custom-events/logout.event';

import View from './user-menu.view';
import { ViewTypes, MenuMethods } from './user-menu.t';

const UserMenu: React.FunctionComponent<{ buttonRef: React.RefObject<HTMLDivElement> }> = p => {
  const positionLeft: number = p.buttonRef.current.offsetLeft;
  const buttonWidth: number = p.buttonRef.current.offsetWidth;
  const dispatch = useDispatch();

  const handleLogout: VoidFunction = useCallback(() => {
    dispatchLogout();
  }, []);

  const handleChangeAddress: VoidFunction = useCallback(() => {
    dispatch(setActive());
    dispatch(menuOFF());
  }, []);

  const menuMethods: MenuMethods = {
    logout: handleLogout,
    changeAddress: handleChangeAddress,
  };

  const viewProps: ViewTypes = { positionLeft, buttonWidth, menuMethods };
  return <View {...viewProps} />;
};

export default UserMenu;
