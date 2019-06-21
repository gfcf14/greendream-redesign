import React from 'react';
import { Flex } from 'rebass';
import PropTypes from 'prop-types';
import './menu-separator.scss';

export function MenuSeparator({ separatorTitle }) {
  return (
    <Flex className="menu-separator-rct-component">
      <span className="separator-title">{separatorTitle}</span>
      <div className="separator-bar" />
    </Flex>
  );
}

MenuSeparator.propTypes = {
  separatorTitle: PropTypes.string.isRequired,
};

