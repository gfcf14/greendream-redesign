import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';
import { Flex, Image } from 'rebass';
import { FormButton, FormRadio } from 'components';
import { FIELD_TEXTS, FORGOT_RADIO_CONFIGS, RADIO_BUTTON_CONFIGS } from 'utils/constants';
import { getImageSource } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './form-field.scss';

function getBasedOnStatus(fieldType, error, value) {
  if (error) {
    return `${fieldType}-error`;
  }

  if (value !== '') {
    return `${fieldType}-ready`;
  }

  return fieldType;
}

function renderInput(fieldType, inputProps) {
  const { error, ...otherProps } = inputProps;
  const isPassword = ['password', 'repeat'].includes(fieldType);

  return (
    <Fragment>
      <Image
        src={getImageSource(getBasedOnStatus(fieldType, error, inputProps.value))}
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
        {...otherProps}
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

function renderTextArea(formType, fieldType, textAreaProps) {
  const { error, ...otherProps } = textAreaProps;

  return (
    <Fragment>
      <Image
        src={getImageSource(getBasedOnStatus(fieldType, error, textAreaProps.value))}
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
        {...otherProps}
      />
    </Fragment>
  );
}

function renderFormRadios(fieldType, radioButtonProps) {
  const selectedConfig = fieldType === 'sex' ? RADIO_BUTTON_CONFIGS : FORGOT_RADIO_CONFIGS;

  return Object.keys(selectedConfig).map((key) => {
    const formRadioProps = {
      ...selectedConfig[`${key}`],
      ...radioButtonProps,
    };

    return <FormRadio key={shortid.generate()} {...formRadioProps} />;
  });
}

function renderRadioButtons(fieldType, radioButtonProps) {
  const radioText = fieldType === 'sex' ?
    FIELD_TEXTS[`${fieldType}`] : MESSAGES.EXTERNAL_FORM_FORGOT;

  return (
    <Flex className="form-field-rct-component__radio-field">
      <span className="radio-text">{radioText}</span>
      {renderFormRadios(fieldType, radioButtonProps)}
    </Flex>
  );
}

function isDefault() {
  const defaultCheck = document.querySelector('.check-box');

  if (defaultCheck) {
    return defaultCheck.checked;
  }

  return false;
}

function decideIfShowing(value, error, selectedSex) {
  if (isDefault() && selectedSex) {
    return true;
  }

  if (value && !error) {
    return true;
  }

  return false;
}

function getPreviewBasedOnSex(selectedSex) {
  if (isDefault) {
    return getImageSource(selectedSex || 'unknown');
  }

  return '#';
}

function renderProfileButtonArea(fieldType, profilePicRef, profilePicProps) {
  const {
    error,
    onChange,
    value,
    selectedSex,
  } = profilePicProps;

  const formButtonProps = {
    buttonText: MESSAGES.FORM_PIC,
    isSubmit: false,
    onClick: () => profilePicRef.current.click(),
    isDefault: isDefault(),
  };

  if (value && value !== 'default') {
    const reader = new FileReader();

    reader.onload = (e) => {
      const previewPic = document.querySelector('.preview-pic');

      if (previewPic) {
        previewPic.src = e.target.result;
      }
    };

    reader.readAsDataURL(value);
  }

  return (
    <Fragment>
      <Flex className="form-field-rct-component__profile-pic">
        <FormButton {...formButtonProps} />
        <input
          className="upload-button"
          type="file"
          accept="image/*"
          name={fieldType}
          ref={profilePicRef}
          onChange={onChange}
        />
        <Flex className="pic-area">
          <Image
            className={classNames(
              'preview-pic',
              decideIfShowing(value, error, selectedSex) ? '' : 'hidden',
            )}
            src={getPreviewBasedOnSex(selectedSex)}
            alt="preview-pic"
          />
        </Flex>
      </Flex>
      <Flex className="form-field-rct-component__checkbox-area">
        <input
          className="check-box"
          type="checkbox"
          name={fieldType}
          onClick={() => onChange({
            target: {
              name: fieldType,
              value: isDefault() ?
                'default' : '',
            },
          })}
        />
        <span
          className="default-text"
          onClick={() => document.querySelector('.check-box').click()}
          onKeyUp={() => document.querySelector('.check-box').click()}
          role="button"
          tabIndex="-1"
        >
          {MESSAGES.FORM_DEFAULT}
        </span>
      </Flex>
    </Fragment>
  );
}

function renderFieldByType(formType, fieldType, otherProps, profilePicRef) {
  const {
    value,
    error,
    onChange,
    onKeyUp,
    onBlur,
    selectedSex,
    formClass,
  } = otherProps;

  switch (fieldType) {
    case 'name':
    case 'email':
    case 'username':
    case 'password':
    case 'repeat': {
      const inputProps = {
        value,
        error,
        onChange,
        onKeyUp,
        onBlur,
      };

      return renderInput(fieldType, inputProps);
    }
    case 'message': {
      const textAreaProps = {
        value,
        error,
        onChange,
        onBlur,
      };

      return renderTextArea(formType, fieldType, textAreaProps);
    }
    case 'sex':
    case 'forgot': {
      const radioButtonProps = {
        onChange,
        isChecked: value,
        formClass,
      };

      return renderRadioButtons(fieldType, radioButtonProps);
    }
    case 'pic': {
      const profilePicProps = {
        error,
        onChange,
        value,
        selectedSex,
      };

      return renderProfileButtonArea(fieldType, profilePicRef, profilePicProps);
    }
    default: {
      return null;
    }
  }
}

export function FormField(props) {
  const { fieldType, formType, ...otherProps } = props;
  const profilePicRef = useRef(null);

  const siteUrl = window.location.href;
  const isExternal = siteUrl.includes('change') || siteUrl.includes('recovery');

  return (
    <Flex
      className={classNames(
        'form-field-rct-component',
        fieldType === 'username' && formType === 'signin' ? 'top-space' : '',
        isExternal ? 'external' : '',
      )}
    >
      {renderFieldByType(formType, fieldType, otherProps, profilePicRef)}
    </Flex>
  );
}

FormField.propTypes = {
  fieldType: PropTypes.string.isRequired,
  formType: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func.isRequired,
  selectedSex: PropTypes.string,
  formClass: PropTypes.string.isRequired,
};

FormField.defaultProps = {
  selectedSex: '',
  onKeyUp: () => null,
};
