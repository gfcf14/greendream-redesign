import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';
import { Flex, Image } from 'rebass';
import { FormButton, FormRadio } from 'components';
import { FIELD_TEXTS, RADIO_BUTTON_CONFIGS } from 'utils/constants';
import { getImageSource } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './form-field.scss';

function getBasedOnStatus(fieldType, otherProps) {
  const { error, value } = otherProps;

  if (error) {
    return `${fieldType}-error`;
  }

  if (value !== '') {
    return `${fieldType}-ready`;
  }

  return fieldType;
}

function renderInput(fieldType, otherProps) {
  const { error, ...inputProps } = otherProps;
  const isPassword = ['password', 'repeat'].includes(fieldType);

  return (
    <Fragment>
      <Image
        src={getImageSource(getBasedOnStatus(fieldType, otherProps))}
        className={classNames(
          'form-field-rct-component__input-image',
          error ? 'error' : '',
        )}
        alt="input-image"
        onClick={() => document.querySelector('.form-field-rct-component__input').focus()}
      />
      <input
        className={classNames(
          'form-field-rct-component__input',
          error ? 'error' : '',
        )}
        name={fieldType}
        placeholder={FIELD_TEXTS[`${fieldType}`]}
        type={isPassword ? 'password' : 'text'}
        {...inputProps}
      />
    </Fragment>
  );
}

function getTextAreaPlaceholder(formType, fieldType) {
  if (formType === 'signup') {
    return `${FIELD_TEXTS[`${fieldType}`]} ${MESSAGES.FORM_ABOUT}`;
  }

  return FIELD_TEXTS[`${fieldType}`];
}

function renderTextArea(formType, fieldType, otherProps) {
  const { error, ...textAreaProps } = otherProps;

  return (
    <Fragment>
      <Image
        src={getImageSource(getBasedOnStatus(fieldType, otherProps))}
        className={classNames(
          'form-field-rct-component__textarea-image',
          formType,
        )}
        alt="textarea-image"
        onClick={() => document.querySelector('.form-field-rct-component__textarea').focus()}
      />
      <textarea
        className={classNames(
          'form-field-rct-component__textarea',
          formType,
          error ? 'error' : '',
        )}
        name={fieldType}
        placeholder={getTextAreaPlaceholder(formType, fieldType)}
        {...textAreaProps}
      />
    </Fragment>
  );
}

function renderFormRadios() {
  return Object.keys(RADIO_BUTTON_CONFIGS).map(key => (
    <FormRadio key={shortid.generate()} {...RADIO_BUTTON_CONFIGS[`${key}`]} />
  ));
}

function renderRadioButtons(fieldType) {
  return (
    <Flex className="form-field-rct-component__radio-field">
      <span className="radio-text">{FIELD_TEXTS[`${fieldType}`]}</span>
      {renderFormRadios()}
    </Flex>
  );
}

function renderProfileButtonArea(fieldType) {
  const formButtonProps = {
    buttonText: MESSAGES.FORM_PIC,
    isSubmit: false,
  };

  return (
    <Fragment>
      <Flex className="form-field-rct-component__profile-pic">
        <FormButton {...formButtonProps} />
        <Flex className="pic-area" />
      </Flex>
      <Flex className="form-field-rct-component__checkbox-area">
        <input className="check-box" type="checkbox" name={fieldType} />
        <span className="default-text">
          {MESSAGES.FORM_DEFAULT}
        </span>
      </Flex>
    </Fragment>
  );
}

function renderFieldByType(formType, fieldType, otherProps) {
  switch (fieldType) {
    case 'name':
    case 'email':
    case 'username':
    case 'password':
    case 'repeat': {
      return renderInput(fieldType, otherProps);
    }
    case 'message': {
      return renderTextArea(formType, fieldType, otherProps);
    }
    case 'sex': {
      return renderRadioButtons(fieldType);
    }
    case 'pic': {
      return renderProfileButtonArea(fieldType);
    }
    default: {
      return null;
    }
  }
}

export function FormField(props) {
  const { fieldType, formType, ...otherProps } = props;

  return (
    <Flex
      className={classNames(
        'form-field-rct-component',
        fieldType === 'username' && formType === 'signin' ? 'top-space' : '',
      )}
    >
      {renderFieldByType(formType, fieldType, otherProps)}
    </Flex>
  );
}

FormField.propTypes = {
  fieldType: PropTypes.string.isRequired,
  formType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
