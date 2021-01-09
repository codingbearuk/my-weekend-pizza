import language from 'language-sources';
import { MenuItem } from './menu.t';

const userMenu: Array<MenuItem> = [
  {
    name: 'logout',
    title: language.userMenu.logout,
    iconName: 'ArrowDownLeftSquare',
  },
  {
    name: 'changeAddress',
    title: language.userMenu.changeAddress,
    iconName: 'HouseFill',
  },
];

export default userMenu;
