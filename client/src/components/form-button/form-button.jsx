import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex } from 'rebass';
import './form-button.scss';

export function FormButton({ buttonText, isSubmit }) {
  return (
    <Flex
      className={classNames(
        'form-button-rct-component',
        isSubmit ? 'submit' : 'pic',
      )}
    >
      <button
        className={classNames(
          'form-button-rct-component__action-button',
          isSubmit ? 'submit' : 'pic',
        )}
      >
        {buttonText}
      </button>
    </Flex>
  );
}

FormButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool.isRequired,
};
