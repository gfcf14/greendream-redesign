import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Image } from 'rebass';
import {
  chooseForMeIcon,
  chordPlayerIcon,
  employmentAssistantIcon,
  orugaIcon,
  raceMasterIcon,
  smsSenderIcon,
  troubleShooterIcon,
  typingTestIcon,
  urlPlayerIcon,
  voteBusterIcon,
  whereforeTheHeckArtThouIcon,
} from 'images/icons';
import './table-cell.scss';

function getImageSource(icon) {
  switch (icon) {
    case 'chooseforme': {
      return chooseForMeIcon;
    }
    case 'chordplayer': {
      return chordPlayerIcon;
    }
    case 'employmentassistant': {
      return employmentAssistantIcon;
    }
    case 'oruga': {
      return orugaIcon;
    }
    case 'racemaster': {
      return raceMasterIcon;
    }
    case 'smssender': {
      return smsSenderIcon;
    }
    case 'troubleshooter': {
      return troubleShooterIcon;
    }
    case 'typingtest': {
      return typingTestIcon;
    }
    case 'urlplayer': {
      return urlPlayerIcon;
    }
    case 'votebuster': {
      return voteBusterIcon;
    }
    case 'whereforetheheckartthou': {
      return whereforeTheHeckArtThouIcon;
    }
    default: {
      return 'no-image';
    }
  }
}

function renderAppIcon(icon) {
  return icon ? (
    <Image
      src={getImageSource(icon)}
      className="table-cell-rct-component__app-icon"
      alt={`${icon}-icon`}
    />
  ) : '';
}

export function TableCell({ cellText, icon }) {
  return (
    <Flex className="table-cell-rct-component">
      {renderAppIcon(icon)}
      <p className={classNames(
        'table-cell-rct-component__cell-text',
        icon ? 'non-centered' : '',
      )}
      >
        {cellText}
      </p>
    </Flex>
  );
}

TableCell.propTypes = {
  cellText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.string,
};

TableCell.defaultProps = {
  icon: '',
};

