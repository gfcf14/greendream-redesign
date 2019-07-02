import React from 'react';
import { AppsPage } from 'components/apps-page/apps-page';
import { PageContainer } from 'containers/page-container/page-container';
import { injectItemKey } from './helpers';

const programsProps = {
  titleContent: {
    title: 'PROGRAMS',
  },
  bodyContent: {
    content: <AppsPage description="Below are apps that provide usefulness beyond interactivity and recreation. Including C++, Java and Javascript, and made to accomplish tasks like SMS text messaging, typing speed, or chord playing, feel free to give them a try!" tableName="Programs" />,
  },
};

const gamesProps = {
  titleContent: {
    title: 'GAMES',
  },
  bodyContent: {
    content: <AppsPage description="From Java to JavaScript, from top view to first person, from racing to visual novel, here are some games I have developed. Have fun!" tableName="Games" />,
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

