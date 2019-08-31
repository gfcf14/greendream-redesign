import React, { Fragment } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import { css } from 'styled-components';
import { MenuItem } from 'components';
import {
  changeBackground,
  chooseForMeLogo,
  chordPlayerLogo,
  CodePenLogo,
  comingSoonImage,
  cookiesIcon,
  CPlusPlusLogo,
  CPlusPlusWhiteLogo,
  CSharpLogo,
  CSharpWhiteLogo,
  DeviantArtLogo,
  employmentAssistantLogo,
  errorBackground,
  FacebookLogo,
  FanfictionLogo,
  femaleDefaultProfile,
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
  greendreamIcon,
  HTML5Logo,
  HTML5WhiteLogo,
  JavaLogo,
  JavaWhiteLogo,
  LinkedinLogo,
  keyboardIcon,
  maleDefaultProfile,
  meCrackedCartoon,
  meHiCartoon,
  meProudCartoon,
  meSuccessCartoon,
  mouseIcon,
  orugaLogo,
  profileIcon,
  raceMasterLogo,
  recoveryBackground,
  signInIcon,
  signOutIcon,
  signUpIcon,
  smsSenderLogo,
  successBackground,
  timeupBackground,
  troubleShooterLogo,
  TwitterLogo,
  typingTestLogo,
  unknownProfileIcon,
  urlPlayerLogo,
  VBDotNetLogo,
  VBDotNetWhiteLogo,
  voteBusterLogo,
  weirdBackground,
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

export function getModulusIndex(array, index, type) {
  const totalCount = array.length;
  const arrayIndex = index % totalCount;

  if (type === 'top' && arrayIndex % 2 === 1 && index !== 0) {
    return array[`${(index - 1) % totalCount}`];
  }

  if (type === 'bottom' && arrayIndex % 2 === 0 && index !== 0) {
    return array[`${(index - 1) % totalCount}`];
  }

  return array[`${index % totalCount}`];
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

export function signIn(table, userName, password) {
  return axios.get(`${SERVER_ADDRESS}/signin`, {
    params: {
      table,
      userName,
      password,
    },
  }).then(response => response.data);
}

export function insertRow(table, data) {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  const formData = new FormData();
  formData.append('table', table);

  Object.keys(data).forEach((key) => {
    formData.append(key, data[`${key}`]);
  });

  return axios.post(`${SERVER_ADDRESS}/insert`, formData, config)
    .then((response) => {
      if (!response.data.code) {
        return 'success';
      }

      return response.data;
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
  return axios.get(`${SERVER_ADDRESS}/row`, {
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

export function activateAccount(token) {
  return axios.get(`${SERVER_ADDRESS}/confirm`, {
    params: {
      token,
    },
  }).then(response => response.data);
}

export function checkExpiry(token) {
  return axios.get(`${SERVER_ADDRESS}/change`, {
    params: {
      token,
    },
  }).then(response => response.data);
}

export function recoverData(recoverFields) {
  return axios.get(`${SERVER_ADDRESS}/recover`, {
    params: {
      ...recoverFields,
    },
  }).then(response => response.data);
}

export function updatePassword(changeFields) {
  return axios.get(`${SERVER_ADDRESS}/password`, {
    params: {
      ...changeFields,
    },
  }).then(response => response.data);
}

export function renderString(text, delimiter) {
  return text.split(delimiter).map(line => (
    <span key={shortid.generate()}>{line}</span>
  ));
}

export function getImageSource(identifier) {
  switch (identifier) {
    case 'change': {
      return changeBackground;
    }
    case 'chooseforme': {
      return chooseForMeLogo;
    }
    case 'chordplayer': {
      return chordPlayerLogo;
    }
    case 'CodePen': {
      return CodePenLogo;
    }
    case 'soon': {
      return comingSoonImage;
    }
    case 'cookies': {
      return cookiesIcon;
    }
    case 'cplusplus': {
      return CPlusPlusLogo;
    }
    case 'csharp': {
      return CSharpLogo;
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
    case 'error': {
      return errorBackground;
    }
    case 'f': {
      return femaleDefaultProfile;
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
    case 'html5': {
      return HTML5Logo;
    }
    case 'icon': {
      return greendreamIcon;
    }
    case 'Java': {
      return JavaWhiteLogo;
    }
    case 'java': {
      return JavaLogo;
    }
    case 'LinkedIn': {
      return LinkedinLogo;
    }
    case 'keyboard': {
      return keyboardIcon;
    }
    case 'm': {
      return maleDefaultProfile;
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
    case 'profile': {
      return profileIcon;
    }
    case 'racemaster': {
      return raceMasterLogo;
    }
    case 'recovery': {
      return recoveryBackground;
    }
    case 'sign-in': {
      return signInIcon;
    }
    case 'sign-out': {
      return signOutIcon;
    }
    case 'sign-up': {
      return signUpIcon;
    }
    case 'smssender': {
      return smsSenderLogo;
    }
    case 'success': {
      return successBackground;
    }
    case 'timeup': {
      return timeupBackground;
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
    case 'unknown': {
      return unknownProfileIcon;
    }
    case 'urlplayer': {
      return urlPlayerLogo;
    }
    case 'VB.NET': {
      return VBDotNetWhiteLogo;
    }
    case 'vbdotnet': {
      return VBDotNetLogo;
    }
    case 'votebuster': {
      return voteBusterLogo;
    }
    case 'weird': {
      return weirdBackground;
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

export function getImageFromBuffer(arrayBuffer) {
  return arrayBuffer.data.map(num => (
    String.fromCharCode(num)
  )).join('');
}
