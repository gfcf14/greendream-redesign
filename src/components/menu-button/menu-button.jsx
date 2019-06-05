import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Image } from 'rebass';
import {
  profileIcon,
  signInIcon,
  signOutIcon,
  signUpIcon,
} from 'images';
import './menu-button.scss';

function getSource(type) {
  switch (type) {
    case 'profile':
      return profileIcon;
    case 'sign-in':
      return signInIcon;
    case 'sign-out':
      return signOutIcon;
    case 'sign-up':
      return signUpIcon;
    default:
      return '';
  }
}

export function MenuButton({ buttonType, position }) {
  return (
    <button className={classNames(
      'menu-button-rct-component',
      position,
    )}
    >
      <Image
        src={getSource(buttonType)}
        className="menu-button-rct-component__icon"
        alt="menu-button-icon"
      />
    </button>
  );
}

MenuButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired,
};

