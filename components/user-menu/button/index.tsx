import React from 'react';

import { Button } from './button.styles';

const MenuButton: React.FunctionComponent<{ onClick: VoidFunction }> = p => {
  return <Button onClick={p.onClick}>{p.children}</Button>;
};

export default MenuButton;
