import {
  ChooseForMe,
  TypingTest,
  UrlPlayer,
  VoteBuster,
  WhereforeTheHeckArtThou,
} from 'old/components';
import { MESSAGES } from './messages';
import { injectItemKey } from './helpers';

export const SERVER_ADDRESS = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
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
      {
        value: 'forgot',
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
  forgot: MESSAGES.FORM_FORGOT,
};

export const ACTION_BUTTONS_MESSAGES = {
  contact: MESSAGES.FORM_SUBMIT_CONTACT,
  signin: MESSAGES.FORM_SUBMIT_SIGNIN,
  signup: MESSAGES.FORM_SUBMIT_SIGNUP,
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

export const SIGN_UP_FORM_HEIGHT_MOBILE = 548;
