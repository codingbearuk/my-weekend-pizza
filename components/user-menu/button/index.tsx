import React from 'react';

import { Button } from './button.styles';

const MenuButton: React.FunctionComponent<{}> = p => {
  return <Button>{p.children}</Button>;
};

export default MenuButton;
