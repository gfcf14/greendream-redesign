import React from 'react';
import {
  aboutBackground,
  gamesBackground,
  programsBackground,
  tutorialsBackground,
} from 'images';
import {
  ChooseForMe,
  TypingTest,
  UrlPlayer,
  VoteBuster,
  WhereforeTheHeckArtThou,
} from 'old/components';
import { MESSAGES } from './messages';
import { injectItemKey } from './helpers';

export const MAX_WINDOW_WIDTH = 1366;
export const MIN_WINDOW_WIDTH = 360;

export const SERVER_ADDRESS = `http://${process.env.REACT_APP_IP_ADDRESS}:${process.env.REACT_APP_SERVER_PORT}`;
export const PREVIEW_GAMES = [
  {
    path: 'votebuster',
    title: 'VOTEBUSTER',
  },
  {
    path: 'racemaster',
    title: 'RACE MASTER',
  },
  {
    path: 'oruga',
    title: 'ORUGA',
  },
  {
    path: 'troubleshooter',
    title: 'TROUBLESHOOTER',
  },
  {
    path: 'whereforetheheckartthou',
    title: 'WHEREFORE THE HECK ART THOU?',
  },
];

export const PREVIEW_PROGRAMS = [
  {
    path: 'smssender',
    title: 'SMS SENDER',
  },
  {
    path: 'employmentassistant',
    title: 'EMPLOYMENT ASSISTANT',
  },
  {
    path: 'typingtest',
    title: 'TYPING TEST',
  },
  {
    path: 'chordplayer',
    title: 'CHORD PLAYER',
  },
  {
    path: 'chooseforme',
    title: 'CHOOSE FOR ME',
  },
  {
    path: 'urlplayer',
    title: 'URL PLAYER',
  },
];

export const DOWNLOADABLE_APPS = {
  chordplayer: 'ChordPlayer.zip',
  employmentassistant: 'EmploymentAssistant.zip',
  oruga: 'Oruga.zip',
  racemaster: 'RaceMaster.zip',
  smssender: 'SMSSender.zip',
  troubleshooter: 'TroubleShooter.zip',
};

export const OLD_APPS = {
  programs: [
    {
      name: 'typingtest',
      component: TypingTest,
    },
    {
      name: 'chooseforme',
      component: ChooseForMe,
    },
    {
      name: 'urlplayer',
      component: UrlPlayer,
    },
  ],
  games: [
    {
      name: 'votebuster',
      component: VoteBuster,
    },
    {
      name: 'whereforetheheckartthou',
      component: WhereforeTheHeckArtThou,
    },
  ],
};

export const APPS_PREVIEW = {
  chooseforme: MESSAGES.CHOOSE_FOR_ME,
  chordplayer: MESSAGES.CHORD_PLAYER,
  employmentassistant: MESSAGES.EMPLOYMENT_ASSISTANT,
  oruga: MESSAGES.ORUGA,
  racemaster: MESSAGES.RACE_MASTER,
  smssender: MESSAGES.SMS_SENDER,
  troubleshooter: MESSAGES.TROUBLESHOOTER,
  typingtest: MESSAGES.TYPING_TEST,
  urlplayer: MESSAGES.URL_PLAYER,
  votebuster: MESSAGES.VOTE_BUSTER,
  whereforetheheckartthou: MESSAGES.WHEREFORE_THE_HECK_ART_THOU,
};

export const PROGRAM_SPECS = {
  smssender: {
    PURPOSE: MESSAGES.SMS_SENDER_PURPOSE,
    LIMITATIONS: MESSAGES.SMS_SENDER_LIMITATIONS,
    REQUIREMENTS: MESSAGES.SMS_SENDER_REQUIREMENTS,
  },
  employmentassistant: {
    PURPOSE: MESSAGES.EMPLOYMENT_ASSISTANT_PURPOSE,
    LIMITATIONS: MESSAGES.EMPLOYMENT_ASSISTANT_LIMITATIONS,
    REQUIREMENTS: MESSAGES.EMPLOYMENT_ASSISTANT_REQUIREMENTS,
  },
  typingtest: {
    PURPOSE: MESSAGES.TYPING_TEST_PURPOSE,
    LIMITATIONS: MESSAGES.TYPING_TEST_LIMITATIONS,
  },
  chordplayer: {
    PURPOSE: MESSAGES.CHORD_PLAYER_PURPOSE,
    LIMITATIONS: MESSAGES.CHORD_PLAYER_LIMITATIONS,
  },
  chooseforme: {
    PURPOSE: MESSAGES.CHOOSE_FOR_ME_PURPOSE,
    LIMITATIONS: MESSAGES.CHOOSE_FOR_ME_LIMITATIONS,
  },
  urlplayer: {
    PURPOSE: MESSAGES.URL_PLAYER_PURPOSE,
    LIMITATIONS: MESSAGES.URL_PLAYER_LIMITATIONS,
  },
};

export const GAME_CONTROLS = {
  votebuster: {
    mouse: MESSAGES.VOTE_BUSTER_CONTROLS_MOUSE,
    keyboard: MESSAGES.VOTE_BUSTER_CONTROLS_KEYBOARD,
  },
  racemaster: {
    mouse: MESSAGES.RACE_MASTER_CONTROLS_MOUSE,
    keyboard: MESSAGES.RACE_MASTER_CONTROLS_KEYBOARD,
  },
  oruga: {
    mouse: MESSAGES.ORUGA_CONTROLS_MOUSE,
    keyboard: MESSAGES.ORUGA_CONTROLS_KEYBOARD,
  },
  troubleshooter: {
    mouse: MESSAGES.TROUBLESHOOTER_CONTROLS_MOUSE,
    keyboard: MESSAGES.TROUBLESHOOTER_CONTROLS_KEYBOARD,
  },
  whereforetheheckartthou: {
    mouse: MESSAGES.WHEREFORE_THE_HECK_ART_THOU_CONTROLS_MOUSE,
  },
};

export const FORM_CONFIGS = [
  {
    type: 'contact',
    fields: [
      {
        value: 'name',
      },
      {
        value: 'email',
      },
      {
        value: 'message',
      },
    ].map(injectItemKey),
  },
  {
    type: 'signup',
    fields: [
      {
        value: 'name',
      },
      {
        value: 'email',
      },
      {
        value: 'sex',
      },
      {
        value: 'pic',
      },
      {
        value: 'username',
      },
      {
        value: 'password',
      },
      {
        value: 'repeat',
      },
      {
        value: 'message',
      },
    ].map(injectItemKey),
  },
  {
    type: 'signin',
    fields: [
      {
        value: 'username',
      },
      {
        value: 'password',
      },
    ].map(injectItemKey),
  },
];

export const EXTERNAL_FORM_CONFIGS = [
  {
    type: 'recovery',
    fields: [
      {
        value: 'forgot',
      },
      {
        value: 'email',
      },
    ].map(injectItemKey),
  },
  {
    type: 'change',
    fields: [
      {
        value: 'password',
      },
      {
        value: 'repeat',
      },
    ].map(injectItemKey),
  },
];

export const DEFAULT_FORM_CONFIG = {
  type: 'contact',
  fields: [],
};

export const FORM_TITLES = {
  contact: MESSAGES.CONTACT_BUTTON,
  signup: MESSAGES.SIGN_UP,
  signin: MESSAGES.SIGN_IN,
};

export const FIELD_TEXTS = {
  name: MESSAGES.FORM_NAME,
  email: MESSAGES.FORM_EMAIL,
  sex: MESSAGES.FORM_SEX,
  pic: MESSAGES.FORM_PIC,
  username: MESSAGES.FORM_USERNAME,
  password: MESSAGES.FORM_PASSWORD,
  repeat: MESSAGES.FORM_REPEAT,
  message: MESSAGES.FORM_MESSAGE,
};

export const ACTION_BUTTONS_MESSAGES = {
  contact: MESSAGES.FORM_SUBMIT_CONTACT,
  signin: MESSAGES.FORM_SUBMIT_SIGNIN,
  signup: MESSAGES.FORM_SUBMIT_SIGNUP,
};

export const EXTERNAL_BUTTONS_MESSAGES = {
  recovery: MESSAGES.EXTERNAL_FORM_SUBMIT_RECOVERY,
  change: MESSAGES.EXTERNAL_FORM_SUBMIT_CHANGE,
};

export const RADIO_BUTTON_CONFIGS = {
  female: {
    text: MESSAGES.FORM_SEX_FEMALE,
    value: 'f',
  },
  male: {
    text: MESSAGES.FORM_SEX_MALE,
    value: 'm',
  },
};

export const FORGOT_RADIO_CONFIGS = {
  username: {
    text: MESSAGES.EXTERNAL_FORM_USERNAME,
    value: 'u',
  },
  password: {
    text: MESSAGES.EXTERNAL_FORM_PASSWORD,
    value: 'p',
  },
};

export const SIGN_UP_FORM_HEIGHT_MOBILE = 613;

export const FORM_ERROR_MESSAGES = {
  name: MESSAGES.FORM_ERROR_REQUIRED,
  email: MESSAGES.FORM_ERROR_EMAIL,
  pic: MESSAGES.FORM_ERROR_IMAGE_2,
  password: MESSAGES.FORM_ERROR_PASSWORD,
  repeat: MESSAGES.FORM_ERROR_PASSWORD,
  message: MESSAGES.FORM_ERROR_MESSAGE,
  username: MESSAGES.FORM_ERROR_USERNAME,
};

export const EMAIL_REGEX = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`' +
                                      '{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9]' +
                                      '(?:[a-z0-9-]*[a-z0-9])?');

export const ACCEPTED_IMAGE_TYPES = [
  'png',
  'jpg',
  'svg+xml',
  'x-icon',
];

export const FORM_STATS_MESSAGES = {
  success: {
    contact: MESSAGES.STATS_CONTACT_SUCCESS,
    signin: MESSAGES.STATS_SIGNIN_SUCCESS,
    signup: MESSAGES.STATS_SIGNUP_SUCCESS,
  },
  failure: {
    contact: MESSAGES.STATS_CONTACT_ERROR,
    signin: MESSAGES.STATS_SIGNIN_ERROR,
    signup: MESSAGES.STATS_SIGNUP_ERROR,
  },
};

export const EXTERNAL_CONFIRMATION_CONFIGS = {
  dubious: {
    image: 'weird',
    message: MESSAGES.EXTERNAL_MESSAGE_CONFIRM_DUBIOUS,
  },
  empty: {
    image: 'weird',
    message: MESSAGES.EXTERNAL_MESSAGE_CONFIRM_EMPTY,
  },
  success: {
    image: 'success',
    message: MESSAGES.EXTERNAL_MESSAGE_CONFIRM_SUCCESS,
  },
};

export const EXTERNAL_CHANGE_CONFIGS = {
  empty: {
    image: 'error',
    message: MESSAGES.EXTERNAL_MESSAGE_PASSWORD_EMPTY,
  },
  expired: {
    image: 'timeup',
    message: MESSAGES.EXTERNAL_MESSAGE_PASSWORD_EXPIRED,
  },
  invalid: {
    image: 'error',
    message: MESSAGES.EXTERNAL_MESSAGE_PASSWORD_INVALID,
  },
  valid: {
    image: 'change',
    message: MESSAGES.EXTERNAL_FORM_SUCCESS_CHANGE,
  },
};

export const EXTERNAL_SITE_CONFIGS = {
  change: EXTERNAL_CHANGE_CONFIGS,
  confirm: EXTERNAL_CONFIRMATION_CONFIGS,
  recovery: {
    image: 'recovery',
    message: {
      password: MESSAGES.EXTERNAL_FORM_SUCCESS_RECOVERY_PASSWORD,
      username: MESSAGES.EXTERNAL_FORM_SUCCESS_RECOVERY_USERNAME,
    },
    subtitle: MESSAGES.EXTERNAL_MESSAGE_SELECT_RECOVER,
  },
};

export const OBJECTIVE_PRONOUNS = {
  f: MESSAGES.PROFILE_FEMALE,
  m: MESSAGES.PROFILE_MALE,
};

export const TUTORIAL_TABLE_MESSAGES = {
  cplusplus: MESSAGES.TUTORIALS_TABLE_CPLUSPLUS,
  csharp: MESSAGES.TUTORIALS_TABLE_CSHARP,
  html5: MESSAGES.TUTORIALS_TABLE_HTML5,
  java: MESSAGES.TUTORIALS_TABLE_JAVA,
  vbdotnet: MESSAGES.TUTORIALS_TABLE_VBDOTNET,
};

export const TUTORIAL_TITLES = {
  cplusplus: MESSAGES.TUTORIALS_CPLUSPLUS,
  csharp: MESSAGES.TUTORIALS_CSHARP,
  html5: MESSAGES.TUTORIALS_HTML5,
  java: MESSAGES.TUTORIALS_JAVA,
  vbdotnet: MESSAGES.TUTORIALS_VBDOTNET,
};

export const TUTORIAL_BLOCK_TITLES = [
  { text: MESSAGES.TUTORIAL_BLOCKS_TUTORIALS },
  { text: MESSAGES.TUTORIAL_BLOCKS_TRICKS },
  { text: MESSAGES.TUTORIAL_BLOCKS_PRACTICE },
].map(injectItemKey);

export const TUTORIAL_LISTS = {
  cplusplus: {
    practice: [
      { value: MESSAGES.PRACTICE_CPLUSPLUS_1 },
    ].map(injectItemKey),
    tricks: [
      { value: MESSAGES.TRICKS_CPLUSPLUS_1 },
      { value: MESSAGES.TRICKS_CPLUSPLUS_2 },
      { value: MESSAGES.TRICKS_CPLUSPLUS_3 },
      { value: MESSAGES.TRICKS_CPLUSPLUS_4 },
    ].map(injectItemKey),
    tutorials: [
      { value: MESSAGES.TUTORIALS_CPLUSPLUS_1 },
      { value: MESSAGES.TUTORIALS_CPLUSPLUS_2 },
      { value: MESSAGES.TUTORIALS_CPLUSPLUS_3 },
      { value: MESSAGES.TUTORIALS_CPLUSPLUS_4 },
      { value: MESSAGES.TUTORIALS_CPLUSPLUS_5 },
      { value: MESSAGES.TUTORIALS_CPLUSPLUS_6 },
      { value: MESSAGES.TUTORIALS_CPLUSPLUS_7 },
    ].map(injectItemKey),
  },
  csharp: {
    practice: [
      { value: MESSAGES.PRACTICE_CSHARP_1 },
    ].map(injectItemKey),
    tricks: [
      { value: MESSAGES.TRICKS_CSHARP_1 },
    ].map(injectItemKey),
    tutorials: [
      { value: MESSAGES.TUTORIALS_CSHARP_1 },
      { value: MESSAGES.TUTORIALS_CSHARP_2 },
      { value: MESSAGES.TUTORIALS_CSHARP_3 },
      { value: MESSAGES.TUTORIALS_CSHARP_4 },
      { value: MESSAGES.TUTORIALS_CSHARP_5 },
      { value: MESSAGES.TUTORIALS_CSHARP_6 },
      { value: MESSAGES.TUTORIALS_CSHARP_7 },
    ].map(injectItemKey),
  },
  html5: {
    practice: [
      { value: MESSAGES.PRACTICE_HTML5_1 },
      { value: MESSAGES.PRACTICE_HTML5_2 },
    ].map(injectItemKey),
    tricks: [
      { value: MESSAGES.TRICKS_HTML5_1 },
      { value: MESSAGES.TRICKS_HTML5_2 },
      { value: MESSAGES.TRICKS_HTML5_3 },
    ].map(injectItemKey),
    tutorials: [
      { value: MESSAGES.TUTORIALS_HTML5_1 },
      { value: MESSAGES.TUTORIALS_HTML5_2 },
      { value: MESSAGES.TUTORIALS_HTML5_3 },
      { value: MESSAGES.TUTORIALS_HTML5_4 },
      { value: MESSAGES.TUTORIALS_HTML5_5 },
      { value: MESSAGES.TUTORIALS_HTML5_6 },
      { value: MESSAGES.TUTORIALS_HTML5_7 },
      { value: MESSAGES.TUTORIALS_HTML5_8 },
    ].map(injectItemKey),
  },
  java: {
    practice: [
      { value: MESSAGES.PRACTICE_JAVA_1 },
      { value: MESSAGES.PRACTICE_JAVA_2 },
      { value: MESSAGES.PRACTICE_JAVA_3 },
    ].map(injectItemKey),
    tricks: [
      { value: MESSAGES.TRICKS_JAVA_1 },
      { value: MESSAGES.TRICKS_JAVA_2 },
      { value: MESSAGES.TRICKS_JAVA_3 },
    ].map(injectItemKey),
    tutorials: [
      { value: MESSAGES.TUTORIALS_JAVA_1 },
      { value: MESSAGES.TUTORIALS_JAVA_2 },
      { value: MESSAGES.TUTORIALS_JAVA_3 },
      { value: MESSAGES.TUTORIALS_JAVA_4 },
      { value: MESSAGES.TUTORIALS_JAVA_5 },
      { value: MESSAGES.TUTORIALS_JAVA_6 },
      { value: MESSAGES.TUTORIALS_JAVA_7 },
      { value: MESSAGES.TUTORIALS_JAVA_8 },
      { value: MESSAGES.TUTORIALS_JAVA_9 },
      { value: MESSAGES.TUTORIALS_JAVA_10 },
      { value: MESSAGES.TUTORIALS_JAVA_11 },
      { value: MESSAGES.TUTORIALS_JAVA_12 },
      { value: MESSAGES.TUTORIALS_JAVA_13 },
    ].map(injectItemKey),
  },
  vbdotnet: {
    practice: [
      { value: MESSAGES.PRACTICE_VBDOTNET_1 },
    ].map(injectItemKey),
    tricks: [
      { value: MESSAGES.TRICKS_VBDOTNET_1 },
    ].map(injectItemKey),
    tutorials: [
      { value: MESSAGES.TUTORIALS_VBDOTNET_1 },
      { value: MESSAGES.TUTORIALS_VBDOTNET_2 },
      { value: MESSAGES.TUTORIALS_VBDOTNET_3 },
      { value: MESSAGES.TUTORIALS_VBDOTNET_4 },
      { value: MESSAGES.TUTORIALS_VBDOTNET_5 },
      { value: MESSAGES.TUTORIALS_VBDOTNET_6 },
    ].map(injectItemKey),
  },
};

export const MIN_TUTORIAL_BLOCK_ELEMENT_HEIGHT = 17;
export const MAX_TUTORIAL_BLOCK_ELEMENT_HEIGHT = 40;

export const COMING_SOON_CONFIG = {
  titleContent: {
    title: MESSAGES.COMING_SOON,
    titleImage: 'soon',
    order: 'reverse',
    isPreview: true,
  },
  bodyContent: {
    content: <span className="coming-soon">{MESSAGES.COMING_SOON_DESCRIPTION}</span>,
  },
};

export const SLIDESHOW_IMAGE_DURATION = 5000;

export const SLIDESHOW_DESCRIPTIONS = [
  MESSAGES.SLIDESHOW_PROGRAMS,
  MESSAGES.SLIDESHOW_GAMES,
  MESSAGES.SLIDESHOW_TUTORIALS,
  MESSAGES.SLIDESHOW_ABOUT,
];

export const SLIDESHOW_IMAGES = [
  programsBackground,
  gamesBackground,
  tutorialsBackground,
  aboutBackground,
];

export const SLIDESHOW_LINKS = [
  'programs',
  'games',
  'tutorials',
  'about',
];

export const MENU_BUTTON_TYPES = {
  left: [
    'sign-up',
    'profile',
  ],
  right: [
    'sign-in',
    'sign-out',
  ],
};

export const FEATURED_CONFIGS = {
  programs: {
    image: 'urlplayer',
    isNew: false,
    message: MESSAGES.FEATURED_PROGRAM,
    title: MESSAGES.FEATURED_TITLE_PROGRAMS,
  },
  games: {
    image: 'votebuster',
    isNew: false,
    message: MESSAGES.FEATURED_GAME,
    title: MESSAGES.FEATURED_TITLE_GAMES,
  },
  tutorials: {
    image: 'icon',
    isNew: false,
    message: MESSAGES.FEATURED_TUTORIAL,
    title: MESSAGES.FEATURED_TITLE_TUTORIALS,
  },
};
