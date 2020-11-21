import { RefObject } from 'react';

export interface View {
  handleMenuItemClick: (id: string) => void;
  closeMenu: () => void;
  animations: {
    enter: (container: RefObject<HTMLDivElement>, menu: RefObject<HTMLDivElement>) => void;
    close: (container: RefObject<HTMLDivElement>, menu: RefObject<HTMLDivElement>) => void;
  };
}
