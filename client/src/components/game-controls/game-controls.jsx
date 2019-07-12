import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import { Flex, Image } from 'rebass';
import { GAME_CONTROLS } from 'utils/constants';
import { getImageSource, renderString } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './game-controls.scss';

function renderDeviceRows(gameName) {
  return Object.keys(GAME_CONTROLS[`${gameName}`]).map((key, i, arr) => (
    <Flex
      className={classNames(
        'game-controls-rct-component__table-row',
        key,
        i === arr.length - 1 ? 'last' : '',
      )}
      key={shortid.generate()}
    >
      <Flex className="control-cell">
        <Image
          src={getImageSource(key)}
          className="cell-icon"
          alt={`${key}-icon`}
        />
        <span className="cell-text">{key.toUpperCase()}</span>
      </Flex>
      <Flex className="cell-description">
        {renderString(GAME_CONTROLS[`${gameName}`][`${key}`], ';')}
      </Flex>
    </Flex>
  ));
}

export function GameControls({ gameName }) {
  return (
    <Flex as="section" className="game-controls-rct-component">
      <Flex className="game-controls-rct-component__table-header">
        <span className="header-text">
          {MESSAGES.CONTROLS}
        </span>
      </Flex>
      {renderDeviceRows(gameName)}
    </Flex>
  );
}

GameControls.propTypes = {
  gameName: PropTypes.string.isRequired,
};
