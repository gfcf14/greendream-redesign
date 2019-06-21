import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image } from 'rebass';
import { sortButtonDown, sortButtonUp } from 'images';
import './header-cell.scss';

export function HeaderCell({ cellTitle }) {
  return (
    <Flex className="header-cell-rct-component">
      <Flex className="header-cell-rct-component__content-container">
        <p className="cell-title">{cellTitle}</p>
        <Flex className="buttons-container">
          <Image
            src={sortButtonUp}
            className="sort-button-up"
            alt="sort-button-up"
          />
          <Image
            src={sortButtonDown}
            className="sort-button-down"
            alt="sort-button-down"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

HeaderCell.propTypes = {
  cellTitle: PropTypes.string.isRequired,
};

