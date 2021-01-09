import React from 'react';
import Menu from 'components/UI/menu';
import userMenu from 'utils/menues/user-menu';
import { MenuItem } from 'utils/menues/menu.t';
import * as Icons from 'react-bootstrap-icons';
import Separator from 'components/UI/separator';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

import { Container } from './user-menu.styles';
import { ViewTypes } from './user-menu.t';
import Button from './button';

const View: React.FunctionComponent<ViewTypes> = p => {
  const device = useSelector((s: RootState) => s.device.resolution);
  return (
    <Menu positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
      <Container width={p.buttonWidth} device={device}>
        {userMenu.map((item: MenuItem) => {
          const Icon = Icons[item.iconName];
          return (
            <Button key={item.name} onClick={p.menuMethods[item.name]}>
              <Icon />
              <Separator width={10} />
              {item.title}
            </Button>
          );
        })}
      </Container>
    </Menu>
  );
};

export default View;
