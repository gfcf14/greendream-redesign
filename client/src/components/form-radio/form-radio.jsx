import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import './form-radio.scss';

export function FormRadio({ text, value }) {
  return (
    <Flex className="form-radio-rct-component">
      <input
        type="radio"
        name="sex"
        value={value}
      />
      <span className="form-radio-rct-component__text">
        {text}
      </span>
    </Flex>
  );
}

FormRadio.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
