import language from 'language-sources';

export interface MenuItem {
  name: string;
  title: string;
  iconName?: string;
}

const menu: Array<MenuItem> = [
  {
    name: 'pizzas',
    title: language.menu.pizzas,
  },
  {
    name: 'sauces',
    title: language.menu.sauces,
  },
  {
    name: 'find-us',
    title: language.menu.findUs,
  },
  {
    name: 'contact-us',
    title: language.menu.contactUs,
  },
];

export default menu;
