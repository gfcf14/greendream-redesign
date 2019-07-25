import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';
import { Flex, Image, Link } from 'rebass';
import { FormButton, FormRadio } from 'components';
import { FIELD_TEXTS, RADIO_BUTTON_CONFIGS } from 'utils/constants';
import { getImageSource } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './form-field.scss';

function renderInput(value) {
  const isPassword = ['password', 'repeat'].includes(value);

  return (
    <Fragment>
      <Image
        src={getImageSource(value)}
        className="form-field-rct-component__input-image"
        alt="input-image"
      />
      <input
        className="form-field-rct-component__input"
        placeholder={FIELD_TEXTS[`${value}`]}
        type={isPassword ? 'password' : 'text'}
      />
    </Fragment>
  );
}

function getTextAreaPlaceholder(type, value) {
  if (type === 'signup') {
    return `${FIELD_TEXTS[`${value}`]} ${MESSAGES.FORM_ABOUT}`;
  }

  return FIELD_TEXTS[`${value}`];
}

function renderTextArea(type, value) {
  return (
    <Fragment>
      <Image
        src={getImageSource(value)}
        className={classNames(
          'form-field-rct-component__textarea-image',
          type,
        )}
        alt="textarea-image"
      />
      <textarea
        className={classNames(
          'form-field-rct-component__textarea',
          type,
        )}
        placeholder={getTextAreaPlaceholder(type, value)}
      />
    </Fragment>
  );
}

function renderFormRadios() {
  return Object.keys(RADIO_BUTTON_CONFIGS).map(key => (
    <FormRadio key={shortid.generate()} {...RADIO_BUTTON_CONFIGS[`${key}`]} />
  ));
}

function renderRadioButtons(value) {
  return (
    <Flex className="form-field-rct-component__radio-field">
      <span className="radio-text">{FIELD_TEXTS[`${value}`]}</span>
      {renderFormRadios()}
    </Flex>
  );
}

function renderProfileButtonArea() {
  const formButtonProps = {
    buttonText: MESSAGES.FORM_PIC,
    isSubmit: false,
  };

  return (
    <Fragment>
      <FormButton {...formButtonProps} />
      <Flex className="form-field-rct-component__profile-pic" />
    </Fragment>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
function renderExternalLink(value) {
  return (
    <Link className="form-field-rct-component__external-link" href="#">
      {FIELD_TEXTS[`${value}`]}
    </Link>
  );
}
/* eslint-enable jsx-a11y/anchor-is-valid */

function renderFieldByValue(type, value) {
  switch (value) {
    case 'name':
    case 'email':
    case 'username':
    case 'password':
    case 'repeat': {
      return renderInput(value);
    }
    case 'message': {
      return renderTextArea(type, value);
    }
    case 'sex': {
      return renderRadioButtons(value);
    }
    case 'pic': {
      return renderProfileButtonArea();
    }
    case 'forgot': {
      return renderExternalLink(value);
    }
    default: {
      return null;
    }
  }
}

export function FormField({ type, value }) {
  return (
    <Flex className="form-field-rct-component">
      {renderFieldByValue(type, value)}
    </Flex>
  );
}

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
