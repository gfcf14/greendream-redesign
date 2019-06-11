import React from 'react';
import PropTypes from 'prop-types';
import './page-button.scss';

export function PageButton({ buttonText }) {
  return (
    <button className="page-button-rct-component">
      {buttonText}
    </button>
  );
}

PageButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

