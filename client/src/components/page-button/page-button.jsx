import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './page-button.scss';

export function PageButton({ buttonText, isAtHomePage, onClick }) {
  return (
    <button
      className={classNames(
        'page-button-rct-component',
        isAtHomePage ? 'homepage' : '',
      )}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

PageButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isAtHomePage: PropTypes.bool,
  onClick: PropTypes.func,
};

PageButton.defaultProps = {
  isAtHomePage: false,
  onClick: () => null,
};
