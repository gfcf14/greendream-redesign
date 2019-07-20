import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import './form-button.scss';

export function FormButton({ buttonText }) {
  return (
    <Flex className="form-button-rct-component">
      <button className="form-button-rct-component__action-button">
        {buttonText}
      </button>
    </Flex>
  );
}

FormButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
