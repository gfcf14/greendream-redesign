import React from 'react';
import axios from 'axios';
import shortid from 'shortid';
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

export function injectItemKey(itemObject) {
  return { ...itemObject, key: shortid.generate() };
}

export function sendMail(referer, email, message) {
  return axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/email`, {
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
  axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/table`, {
    params: {
      tableName,
      tableOrder,
    },
  }).then((response) => {
    setTableData(response.data);
  });
}

export function getRow(rowName, tableName, columnName, setRowData) {
  axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/row`, {
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
    case 'oruga': {
      return orugaLogo;
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
      return 'no-image';
    }
  }
}
