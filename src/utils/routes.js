import React from 'react';
import { PageContainer } from '../containers/page-container/page-container';
import { injectItemKey } from './helpers';

const programsProps = {
  titleContent: {
    title: 'PROGRAMS',
  },
  bodyContent: {
    content: 'programs go here',
  },
};

const gamesProps = {
  titleContent: {
    title: 'GAMES',
  },
  bodyContent: {
    content: 'games go here',
  },
};

const tutorialsProps = {
  titleContent: {
    title: 'TUTORIALS',
  },
  bodyContent: {
    content: 'tutorials go here',
  },
};

const aboutProps = {
  titleContent: {
    title: 'ABOUT',
  },
  bodyContent: {
    content: 'about info goes here',
  },
};

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
    path: '/programs',
    contentComponent: <PageContainer {...programsProps} />,
  },
  {
    name: 'GAMES',
    path: '/games',
    contentComponent: <PageContainer {...gamesProps} />,
  },
  {
    name: 'TUTORIALS',
    path: '/tutorials',
    contentComponent: <PageContainer {...tutorialsProps} />,
  },
  {
    name: 'ABOUT',
    path: '/about',
    contentComponent: <PageContainer {...aboutProps} />,
  },
].map(injectItemKey);

