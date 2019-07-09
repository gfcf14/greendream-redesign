import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Flex } from 'rebass';
import { PROGRAM_SPECS } from 'utils/constants';
import { renderString } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './program-specs.scss';

function renderSpecsList(programName) {
  return Object.keys(PROGRAM_SPECS[`${programName}`]).map((key) => {
    const value = PROGRAM_SPECS[`${programName}`][`${key}`];

    return (
      <Flex className="program-specs-rct-component__spec-row" key={shortid.generate()}>
        <span className="title">{MESSAGES[`${key}`]}</span>
        <Flex className="description">
          {key === 'REQUIREMENTS' ? renderString(value, ';') : value}
        </Flex>
      </Flex>
    );
  });
}

export function ProgramSpecs({ programName }) {
  return (
    <Flex as="section" className="program-specs-rct-component">
      {renderSpecsList(programName)}
    </Flex>
  );
}

ProgramSpecs.propTypes = {
  programName: PropTypes.string.isRequired,
};
