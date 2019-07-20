import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Image } from 'rebass';
import { FIELD_TEXTS } from 'utils/constants';
import { getImageSource } from 'utils/helpers';
import './form-field.scss';

function renderInput(value) {
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
      />
    </Fragment>
  );
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
        placeholder={FIELD_TEXTS[`${value}`]}
      />
    </Fragment>
  );
}

function renderFieldByValue(type, value) {
  switch (value) {
    case 'name':
    case 'email': {
      return renderInput(value);
    }
    case 'message': {
      return renderTextArea(type, value);
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
