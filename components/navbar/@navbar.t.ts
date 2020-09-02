import { RefObject } from "react";

export interface StyledContainer {
  readonly isScrolled: boolean;
}

export interface ViewComponent {
  handlers: {
    handleMainMenuButton: () => void;
    handleSignInMenuButton: () => void;
    handleSignUpMenuButton: () => void;
  };
  state: {
    mainMenuState: boolean;
    signInMenuState: boolean;
    signUpMenuState: boolean;
  };
  refs: {
    signInButton: RefObject<HTMLDivElement>;
    signUpButton: RefObject<HTMLDivElement>;
  };
}

export interface IndexComponent {}
