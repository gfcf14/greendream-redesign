import React from 'react';
import { AboutPage } from 'components/about-page/about-page';
import { AppsPage } from 'components/apps-page/apps-page';
import { SitesTable } from 'components/sites-table/sites-table';
import { TutorialsPage } from 'components/tutorials-page/tutorials-page';
import { PageContainer } from 'containers/page-container/page-container';
import { injectItemKey } from './helpers';
import { MESSAGES } from './messages';

const ABOUT_MESSAGES = [
  {
    rowMainContent: MESSAGES.ABOUT_PARAGRAPH_1,
  },
  {
    rowMainContent: MESSAGES.ABOUT_PARAGRAPH_2,
    rowPicture: 'me-hi',
    pictureDimensions: {
      height: {
        min: 166,
        max: 221,
      },
      width: {
        min: 60,
        max: 80,
      },
    },
  },
  {
    rowMainContent: MESSAGES.ABOUT_PARAGRAPH_3,
  },
  {
    rowMainContent: MESSAGES.ABOUT_PARAGRAPH_4,
  },
  {
    rowMainContent: MESSAGES.ABOUT_PARAGRAPH_5,
  },
  {
    rowMainContent: MESSAGES.ABOUT_PARAGRAPH_6,
    rowPicture: 'me-cracked',
    pictureDimensions: {
      height: {
        min: 103,
        max: 124,
      },
      width: {
        min: 125,
        max: 150,
      },
    },
    rowOrder: 'reverse',
  },
  {
    rowMainContent: MESSAGES.ABOUT_PARAGRAPH_7,
  },
  {
    rowMainContent: <SitesTable />,
    rowPicture: 'me-proud',
    pictureDimensions: {
      height: {
        min: 114,
        max: 221,
      },
      width: {
        min: 90,
        max: 175,
      },
    },
  },
  {
    rowMainContent: MESSAGES.ABOUT_PARAGRAPH_8,
  },
].map(injectItemKey);

const programsProps = {
  titleContent: {
    title: MESSAGES.PROGRAMS_TITLE,
  },
  bodyContent: {
    content: <AppsPage description={MESSAGES.PROGRAMS} tableName="Programs" />,
  },
};

const gamesProps = {
  titleContent: {
    title: MESSAGES.GAMES_TITLE,
  },
  bodyContent: {
    content: <AppsPage description={MESSAGES.GAMES} tableName="Games" />,
  },
};

const tutorialsProps = {
  titleContent: {
    title: MESSAGES.TUTORIALS_TITLE,
  },
  bodyContent: {
    content: <TutorialsPage />,
  },
};

const aboutProps = {
  titleContent: {
    title: MESSAGES.ABOUT_TITLE_1,
    titleImage: 'me-success',
  },
  bodyContent: {
    content: <AboutPage paragraphs={ABOUT_MESSAGES} />,
  },
};

export const ACCOUNT_ROUTES = [
  {
    name: MESSAGES.SIGN_UP,
  },
  {
    name: MESSAGES.SIGN_IN,
  },
].map(injectItemKey);

export const MENU_ROUTES = [
  {
    name: MESSAGES.PROGRAMS_PATH,
    path: '/programs',
    contentComponent: <PageContainer {...programsProps} />,
  },
  {
    name: MESSAGES.GAMES_PATH,
    path: '/games',
    contentComponent: <PageContainer {...gamesProps} />,
  },
  {
    name: MESSAGES.TUTORIALS_PATH,
    path: '/tutorials',
    contentComponent: <PageContainer {...tutorialsProps} />,
  },
  {
    name: MESSAGES.ABOUT_PATH,
    path: '/about',
    contentComponent: <PageContainer {...aboutProps} />,
  },
].map(injectItemKey);

