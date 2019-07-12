import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './page-button.scss';

export function PageButton({ buttonText, isAtHomePage }) {
  return (
    <button
      className={classNames(
        'page-button-rct-component',
        isAtHomePage ? 'homepage' : '',
      )}
    >
      {buttonText}
    </button>
  );
}

PageButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isAtHomePage: PropTypes.bool,
};

PageButton.defaultProps = {
  isAtHomePage: false,
};
