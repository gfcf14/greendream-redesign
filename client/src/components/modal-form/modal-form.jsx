import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import classNames from 'classnames';
import { FormButton, FormField } from 'components';
import { ACTION_BUTTONS_MESSAGES, FORM_TITLES } from 'utils/constants';
import { MESSAGES } from 'utils/messages';
import './modal-form.scss';

function renderByConfig(config) {
  return config.fields.map((field) => {
    const { type } = config;
    const { value } = field;

    const formFieldProps = {
      value,
      type,
    };

    return <FormField key={field.key} {...formFieldProps} />;
  });
}

function renderInstructionsText(type) {
  switch (type) {
    case 'contact': {
      return (
        <p className="form-instructions">
          {`${MESSAGES.FORM_INSTRUCTIONS}`}
        </p>
      );
    }
    case 'signup': {
      return (
        <p className="form-instructions">
          {`${MESSAGES.FORM_INSTRUCTIONS} ${MESSAGES.FORM_COMPLETION}`}
        </p>
      );
    }
    default: {
      return null;
    }
  }
}

function renderActionButton(type) {
  const formButtonProps = {
    buttonText: ACTION_BUTTONS_MESSAGES[`${type}`],
    isSubmit: true,
  };

  return <FormButton {...formButtonProps} />;
}

export function ModalForm({
  config,
  modal,
  fadeOut,
  isBigger,
}) {
  const { type } = config;

  return (
    <Flex
      as="section"
      className={classNames(
        'modal-form-rct-component',
        modal >= 0 ? 'modal' : '',
        isBigger && type === 'signup' ? 'bigger' : '',
      )}
    >
      <Flex className="modal-form-rct-component__title-bar">
        <p className="title-text">
          {FORM_TITLES[`${type}`]}
        </p>
        <Flex className="close-button" onClick={() => fadeOut()}>
          <span>X</span>
        </Flex>
      </Flex>
      <Flex className="modal-form-rct-component__field-container">
        {renderInstructionsText(type)}
        {renderByConfig(config)}
        {renderActionButton(type)}
      </Flex>
    </Flex>
  );
}

ModalForm.propTypes = {
  config: PropTypes.shape({
    type: PropTypes.oneOf(['contact', 'signup', 'signin']).isRequired,
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  modal: PropTypes.number.isRequired,
  fadeOut: PropTypes.func.isRequired,
  isBigger: PropTypes.bool.isRequired,
};

