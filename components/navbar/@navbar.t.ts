export interface StyledContainer {
  readonly isScrolled: boolean;
}

export interface ViewComponent {
  handlers: {
    handleMainMenuButton: () => void;
  };
  state: {
    mainMenuState: boolean;
  };
}

export interface IndexComponent {}
