import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Image } from 'rebass';
import {
  orugaLogo,
  raceMasterLogo,
  troubleShooterLogo,
  voteBusterLogo,
  whereforeTheHeckArtThouLogo,
} from 'images/games-logos';
import {
  chooseForMeLogo,
  chordPlayerLogo,
  employmentAssistantLogo,
  smsSenderLogo,
  typingTestLogo,
  urlPlayerLogo,
} from 'images/programs-logos';
import './table-cell.scss';

function getImageSource(logo) {
  switch (logo) {
    case 'chooseforme': {
      return chooseForMeLogo;
    }
    case 'chordplayer': {
      return chordPlayerLogo;
    }
    case 'employmentassistant': {
      return employmentAssistantLogo;
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
    case 'typingtest': {
      return typingTestLogo;
    }
    case 'urlplayer': {
      return urlPlayerLogo;
    }
    case 'votebuster': {
      return voteBusterLogo;
    }
    case 'whereforetheheckartthou': {
      return whereforeTheHeckArtThouLogo;
    }
    default: {
      return 'no-image';
    }
  }
}

function renderAppIcon(logo) {
  return logo ? (
    <Image
      src={getImageSource(logo)}
      className="table-cell-rct-component__app-logo"
      alt={`${logo}-logo`}
    />
  ) : '';
}

export function TableCell({ cellText, logo }) {
  return (
    <Flex className="table-cell-rct-component">
      {renderAppIcon(logo)}
      <p className={classNames(
        'table-cell-rct-component__cell-text',
        logo ? 'non-centered' : '',
      )}
      >
        {cellText}
      </p>
    </Flex>
  );
}

TableCell.propTypes = {
  cellText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  logo: PropTypes.string,
};

TableCell.defaultProps = {
  logo: '',
};

