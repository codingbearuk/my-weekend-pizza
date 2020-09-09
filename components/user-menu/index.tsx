import React from 'react';

import View from './user-menu.view';

const UserMenu: React.FunctionComponent<{ buttonRef: React.RefObject<HTMLDivElement> }> = p => {
  const positionLeft: number = p.buttonRef.current.offsetLeft;
  const buttonWidth: number = p.buttonRef.current.offsetWidth;

  const viewProps = { positionLeft, buttonWidth };
  return <View {...viewProps} />;
};

export default UserMenu;
