import { injectItemKey } from './helpers';

export const ACCOUNT_ROUTES = [
  {
    name: 'SIGN UP',
  },
  {
    name: 'SIGN IN',
  },
].map(injectItemKey);

export const MENU_ROUTES = [
  {
    name: 'PROGRAMS',
  },
  {
    name: 'GAMES',
  },
  {
    name: 'TUTORIALS',
  },
  {
    name: 'ABOUT',
  },
].map(injectItemKey);

