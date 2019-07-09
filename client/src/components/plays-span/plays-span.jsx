import React from 'react';
import { Flex } from 'rebass';
import PropTypes from 'prop-types';
import { MESSAGES } from 'utils/messages';
import './plays-span.scss';

export function PlaysSpan({ playsNumber }) {
  return (
    <Flex as="section" className="plays-span-rct-component">
      <span className="plays-span-rct-component__text">
        {MESSAGES.PAGE_TABLE_PLAYS}
      </span>
      <span className="plays-span-rct-component__count">
        {playsNumber}
      </span>
    </Flex>
  );
}

PlaysSpan.propTypes = {
  playsNumber: PropTypes.number.isRequired,
};
