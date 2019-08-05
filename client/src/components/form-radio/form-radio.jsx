import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import './form-radio.scss';

export function FormRadio(props) {
  const {
    text,
    value,
    onChange,
    isChecked,
  } = props;

  return (
    <Flex className="form-radio-rct-component">
      <input
        type="radio"
        name="sex"
        value={value}
        onChange={e => onChange(e)}
        checked={isChecked === value}
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
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.string.isRequired,
};
