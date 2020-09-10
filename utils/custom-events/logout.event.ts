import store from 'redux/store';
import { logoutUser } from 'redux/actions/login.action';
import { menuOFF } from 'redux/actions/navigation.actions';

let logoutEvent;
if (process.browser) logoutEvent = new CustomEvent('logout');
export const dispatchLogout = () => window.dispatchEvent(logoutEvent);
export const handleLogoutEvent = (): void => {
  store.dispatch(logoutUser());
  store.dispatch(menuOFF());
};
