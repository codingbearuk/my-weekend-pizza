import language from 'language-sources';
import { MenuItem } from './menu.t';

const userMenu: Array<MenuItem> = [
  {
    name: 'logout',
    title: language.userMenu.logout,
    iconName: 'ArrowDownLeftSquare',
  },
];

export default userMenu;
