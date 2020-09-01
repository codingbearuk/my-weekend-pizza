import { RefObject } from "react";

export interface StyledContainer {
  readonly isScrolled: boolean;
}

export interface ViewComponent {
  handlers: {
    handleMainMenuButton: () => void;
    handleSignInMenuButton: () => void;
  };
  state: {
    mainMenuState: boolean;
    signInMenuState: boolean;
  };
  refs: {
    signInButton: RefObject<HTMLDivElement>;
  };
}

export interface IndexComponent {}
