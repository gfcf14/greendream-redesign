import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex } from 'rebass';
import './form-button.scss';

function hasError(errors) {
  return Object.values(errors).find(e => e === true);
}

export function FormButton(props) {
  const {
    buttonText,
    isSubmit,
    errors,
    complete,
    onClick,
    isDefault,
  } = props;

  return (
    <Flex
      className={classNames(
        'form-button-rct-component',
        isSubmit ? 'submit' : 'pic',
        isSubmit && hasError(errors) ? 'error' : '',
      )}
    >
      <button
        className={classNames(
          'form-button-rct-component__action-button',
          isSubmit ? 'submit' : 'pic',
          isSubmit && hasError(errors) ? 'error' : '',
          (isSubmit && !complete) || (!isSubmit && isDefault) ? 'disabled' : '',
          complete ? '' : 'disabled',
        )}
        type={isSubmit ? 'submit' : 'button'}
        disabled={(isSubmit && !complete) || (!isSubmit && isDefault)}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </Flex>
  );
}

FormButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool.isRequired,
  errors: PropTypes.objectOf(PropTypes.bool),
  complete: PropTypes.bool,
  onClick: PropTypes.func,
  isDefault: PropTypes.bool,
};

FormButton.defaultProps = {
  errors: {},
  complete: true,
  onClick: () => null,
  isDefault: false,
};
