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

export const FORM_ROUTES = [
  {
    name: MESSAGES.SIGN_UP,
  },
  {
    name: MESSAGES.SIGN_IN,
  },
].map(injectItemKey);

export const SESSION_ROUTES = [
  {
    name: MESSAGES.PROFILE,
  },
  {
    name: MESSAGES.SIGN_OUT,
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

export const EXTERNAL_ROUTES = [
  { path: '/change' },
  { path: '/confirm' },
  { path: '/recovery' },
].map(injectItemKey);

export const TUTORIAL_PREVIEW_ROUTES = [
  { path: '/cplusplus' },
  { path: '/csharp' },
  { path: '/html5' },
  { path: '/java' },
  { path: '/vbdotnet' },
].map(injectItemKey);

// The path values for PRACTICE_PATHS, TRICK_PATHS, and TUTORIAL_PATHS
// must match the names for {paths/tricks/tutorials}_{language}_{number}
// declared in messages.js

export const PRACTICE_PATHS = {
  cplusplus: [
    { value: 'strlen-with-pointers' },
  ].map(injectItemKey),
  csharp: [
    { value: 'basic-application-form' },
  ].map(injectItemKey),
  html5: [
    { value: 'making-a-table' },
    { value: 'change-on-hover' },
  ].map(injectItemKey),
  java: [
    { value: 'percentage-to-grade' },
    { value: 'fizz-buzz' },
    { value: 'abracadabra' },
  ].map(injectItemKey),
  vbdotnet: [
    { value: 'set-custom-label-text' },
  ].map(injectItemKey),
};

export const TRICK_PATHS = {
  cplusplus: [
    { value: 'fast-multiplication-by-two' },
    { value: 'xor-swapping' },
    { value: 'greatest-common-denominator' },
    { value: 'automatic-variable-type' },
  ].map(injectItemKey),
  csharp: [
    { value: 'is-operator' },
  ].map(injectItemKey),
  html5: [
    { value: 'html5-semantic-elements' },
    { value: 'html5-media-elements' },
    { value: 'html5-form-elements' },
  ].map(injectItemKey),
  java: [
    { value: 'binary-search' },
    { value: 'quick-sort' },
    { value: 'merge-sort' },
  ].map(injectItemKey),
  vbdotnet: [
    { value: 'connecting-to-sql-databases' },
  ].map(injectItemKey),
};

export const TUTORIAL_PATHS = {
  cplusplus: [
    { value: 'structure' },
    { value: 'input-output' },
    { value: 'functions' },
    { value: 'file-handling' },
    { value: 'structs' },
    { value: 'classes' },
    { value: 'pointers' },
  ].map(injectItemKey),
  csharp: [
    { value: 'structure' },
    { value: 'data-types' },
    { value: 'flow-control' },
    { value: 'functions' },
    { value: 'file-handling' },
    { value: 'object-oriented-programming' },
    { value: 'classes' },
  ].map(injectItemKey),
  html5: [
    { value: 'structure' },
    { value: 'text-and-lists' },
    { value: 'media-images-sound-video' },
    { value: 'hyperlinks' },
    { value: 'organizing' },
    { value: 'forms' },
    { value: 'events' },
    { value: 'uncommon-tags' },
  ].map(injectItemKey),
  java: [
    { value: 'structure' },
    { value: 'data-types' },
    { value: 'input-output' },
    { value: 'decision-blocks' },
    { value: 'looping' },
    { value: 'functions' },
    { value: 'recursion' },
    { value: 'file-handling' },
    { value: 'object-oriented-programming' },
    { value: 'classes' },
    { value: 'methods' },
    { value: 'inheritance' },
    { value: 'interfaces' },
  ].map(injectItemKey),
  vbdotnet: [
    { value: 'structure' },
    { value: 'project-properties' },
    { value: 'basic-form-tools' },
    { value: 'file-handling' },
    { value: 'events' },
    { value: 'advanced-form-tools' },
  ].map(injectItemKey),
};
