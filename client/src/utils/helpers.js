import React, { Fragment } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import { css } from 'styled-components';
import { MenuItem } from 'components';
import {
  chooseForMeLogo,
  chordPlayerLogo,
  CodePenLogo,
  CPlusPlusWhiteLogo,
  CSharpWhiteLogo,
  DeviantArtLogo,
  employmentAssistantLogo,
  FacebookLogo,
  FanfictionLogo,
  formEmailIcon,
  formEmailErrorIcon,
  formEmailReadyIcon,
  formNameIcon,
  formNameErrorIcon,
  formNameReadyIcon,
  formPasswordIcon,
  formPasswordErrorIcon,
  formPasswordReadyIcon,
  formTextIcon,
  formTextErrorIcon,
  formTextReadyIcon,
  GithubLogo,
  HTML5WhiteLogo,
  JavaWhiteLogo,
  LinkedinLogo,
  keyboardIcon,
  meCrackedCartoon,
  meHiCartoon,
  meProudCartoon,
  meSuccessCartoon,
  mouseIcon,
  orugaLogo,
  raceMasterLogo,
  smsSenderLogo,
  troubleShooterLogo,
  TwitterLogo,
  typingTestLogo,
  urlPlayerLogo,
  VBDotNetWhiteLogo,
  voteBusterLogo,
  whereforeTheHeckArtThouLogo,
  YoutubeLogo,
} from 'images';
import dimensions from 'styles/_mixins.scss';
import { SERVER_ADDRESS } from './constants';
import { MESSAGES } from './messages';
import { MENU_ROUTES } from './routes';

export const FLUID_DIM = (property, min, max) => css`
  ${property}: calc(${min}px + (${max} - ${min}) * ((${dimensions.maxViewportWidth} - ${dimensions.minWindowWidth}) / 1006));
`;

export function allTrue(listOfConditions) {
  return listOfConditions.reduce((prev, next) => Boolean(prev && next), true);
}

export function injectItemKey(itemObject) {
  return { ...itemObject, key: shortid.generate() };
}

export function capitalizeFromLower(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function renderMenuItems(menuType, modal, toggleModal) {
  return MENU_ROUTES.map((route, i, arr) => {
    const { name, path } = route;

    const menuItemProps = {
      itemName: name,
      itemPath: path,
      itemType: menuType,
    };

    if (i === arr.length - 1 && menuType !== 'desktop') {
      const lastMenuItemProps = {
        itemName: MESSAGES.CONTACT_BUTTON,
        itemType: menuType,
        modal,
        toggleModal,
      };

      return (
        <Fragment key={route.key}>
          <MenuItem key={route.key} {...menuItemProps} />
          <MenuItem key={shortid.generate()} {...lastMenuItemProps} />
        </Fragment>
      );
    }

    return <MenuItem key={route.key} {...menuItemProps} />;
  });
}

export function sendMail(referer, email, message) {
  return axios.get(`${SERVER_ADDRESS}/email`, {
    params: {
      referer,
      email,
      message,
    },
  }).then((response) => {
    if (response.status === 200) {
      return 'success';
    }

    return response.data.text;
  });
}

export function getTable(tableName, tableOrder, setTableData) {
  axios.get(`${SERVER_ADDRESS}/table`, {
    params: {
      tableName,
      tableOrder,
    },
  }).then((response) => {
    setTableData(response.data);
  });
}

export function getRow(rowName, tableName, columnName, setRowData) {
  axios.get(`${SERVER_ADDRESS}/row`, {
    params: {
      rowName,
      tableName,
      columnName,
    },
  }).then((response) => {
    setRowData(response.data);
  });
}

export function incrementCount(rowName, tableName, columnName, setRowData) {
  axios.get(`${SERVER_ADDRESS}/increment`, {
    params: {
      rowName,
      tableName,
      columnName,
    },
  }).then((response) => {
    setRowData(response.data);
  });
}

export function renderString(text, delimiter) {
  return text.split(delimiter).map(line => (
    <span key={shortid.generate()}>{line}</span>
  ));
}

export function getImageSource(identifier) {
  switch (identifier) {
    case 'chooseforme': {
      return chooseForMeLogo;
    }
    case 'chordplayer': {
      return chordPlayerLogo;
    }
    case 'CodePen': {
      return CodePenLogo;
    }
    case 'C++': {
      return CPlusPlusWhiteLogo;
    }
    case 'C#': {
      return CSharpWhiteLogo;
    }
    case 'DeviantArt': {
      return DeviantArtLogo;
    }
    case 'email': {
      return formEmailIcon;
    }
    case 'email-error': {
      return formEmailErrorIcon;
    }
    case 'email-ready': {
      return formEmailReadyIcon;
    }
    case 'employmentassistant': {
      return employmentAssistantLogo;
    }
    case 'Facebook': {
      return FacebookLogo;
    }
    case 'FanFiction': {
      return FanfictionLogo;
    }
    case 'GitHub': {
      return GithubLogo;
    }
    case 'HTML': {
      return HTML5WhiteLogo;
    }
    case 'Java': {
      return JavaWhiteLogo;
    }
    case 'LinkedIn': {
      return LinkedinLogo;
    }
    case 'keyboard': {
      return keyboardIcon;
    }
    case 'message': {
      return formTextIcon;
    }
    case 'message-error': {
      return formTextErrorIcon;
    }
    case 'message-ready': {
      return formTextReadyIcon;
    }
    case 'me-cracked': {
      return meCrackedCartoon;
    }
    case 'me-hi': {
      return meHiCartoon;
    }
    case 'me-proud': {
      return meProudCartoon;
    }
    case 'me-success': {
      return meSuccessCartoon;
    }
    case 'mouse': {
      return mouseIcon;
    }
    case 'name':
    case 'username': {
      return formNameIcon;
    }
    case 'name-error':
    case 'username-error': {
      return formNameErrorIcon;
    }
    case 'name-ready':
    case 'username-ready': {
      return formNameReadyIcon;
    }
    case 'oruga': {
      return orugaLogo;
    }
    case 'password':
    case 'repeat': {
      return formPasswordIcon;
    }
    case 'password-error':
    case 'repeat-error': {
      return formPasswordErrorIcon;
    }
    case 'password-ready':
    case 'repeat-ready': {
      return formPasswordReadyIcon;
    }
    case 'racemaster': {
      return raceMasterLogo;
    }
    case 'smssender': {
      return smsSenderLogo;
    }
    case 'troubleshooter': {
      return troubleShooterLogo;
    }
    case 'Twitter': {
      return TwitterLogo;
    }
    case 'typingtest': {
      return typingTestLogo;
    }
    case 'urlplayer': {
      return urlPlayerLogo;
    }
    case 'VB.NET': {
      return VBDotNetWhiteLogo;
    }
    case 'votebuster': {
      return voteBusterLogo;
    }
    case 'whereforetheheckartthou': {
      return whereforeTheHeckArtThouLogo;
    }
    case 'YouTube': {
      return YoutubeLogo;
    }
    default: {
      return identifier;
    }
  }
}
