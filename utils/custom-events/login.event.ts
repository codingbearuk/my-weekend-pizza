const createLoginEvent = (sessionID: string): void => {
  const login: Event = new CustomEvent("login", {
    detail: {
      sessionID,
    },
  });
  window.dispatchEvent(login);
};

export const loginEventHandle = (sessionID: string): void => {
  localStorage.setItem("sessionID", sessionID);
};

export interface LoginEvent extends Event {
  detail: {
    sessionID: string;
  };
}

export default createLoginEvent;
