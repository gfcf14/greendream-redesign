import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import classNames from 'classnames';
import { Image, Link } from 'rebass';
import { getImageSource } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './menu-button.scss';

function renderImage(buttonType) {
  return buttonType !== 'waiting' ? (
    <Image
      src={getImageSource(buttonType)}
      className="menu-button-rct-component__icon"
      alt="menu-button-icon"
    />
  ) : null;
}

function getNewModal(modal, position) {
  if (modal >= 0) {
    return -1;
  }

  return position === 'left' ? 1 : 2;
}

function menuOrSessionAction(isLoggedIn, modal, position, showStatsBar, toggleModal) {
  if (!['waiting', 'no'].includes(isLoggedIn)) {
    if (position === 'right') {
      Cookies.remove('greendream-user');
      showStatsBar(MESSAGES.STATS_SIGNOUT_SUCCESS, false, true);
    }
  } else {
    toggleModal(getNewModal(modal, position));
  }
}

function getBasedonLogin(isLoggedIn, position) {
  return !['waiting', 'no'].includes(isLoggedIn) && position === 'left' ?
    `${process.env.PUBLIC_URL}/profile?user=${isLoggedIn}` : null;
}

export function MenuButton(props) {
  const {
    buttonType,
    position,
    modal,
    toggleModal,
    isLoggedIn,
    showStatsBar,
  } = props;

  return (
    <Link
      href={getBasedonLogin(isLoggedIn, position)}
    >
      <button
        className={classNames(
          'menu-button-rct-component',
          position,
        )}
        onClick={() => menuOrSessionAction(isLoggedIn, modal, position, showStatsBar, toggleModal)}
      >
        {renderImage(buttonType)}
      </button>
    </Link>
  );
}

MenuButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  modal: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.string.isRequired,
  showStatsBar: PropTypes.func.isRequired,
};
