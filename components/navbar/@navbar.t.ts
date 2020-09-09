import { RefObject } from 'react';

export interface StyledContainer {
  readonly isScrolled: boolean;
}

export interface ViewComponent {
  handlers: {
    handleMainMenuButton: () => void;
    handleSignInMenuButton: () => void;
    handleSignUpMenuButton: () => void;
    handleUserMenuButton: () => void;
  };
  state: {
    mainMenuState: boolean;
    signInMenuState: boolean;
    signUpMenuState: boolean;
    isUserLoggedState: boolean;
    userMenuState: boolean;
    emailState: string;
  };
  refs: {
    signInButton: RefObject<HTMLDivElement>;
    signUpButton: RefObject<HTMLDivElement>;
    userButton: RefObject<HTMLDivElement>;
  };
}

export interface IndexComponent {}
