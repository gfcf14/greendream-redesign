import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { Link } from 'rebass';
import classNames from 'classnames';
import colors from 'styles/_colors.scss';
import { MESSAGES } from 'utils/messages';
import './menu-item.scss';

function getNewModal(itemName, modal) {
  if (modal >= 0) {
    return -1;
  }

  switch (itemName) {
    case MESSAGES.CONTACT_BUTTON: {
      return 0;
    }
    case MESSAGES.SIGN_UP: {
      return 1;
    }
    case MESSAGES.SIGN_IN: {
      return 2;
    }
    default: {
      return -1;
    }
  }
}

function decideOnName(itemName, modal, toggleModal, showStatsBar, fadeOut) {
  if (itemName === MESSAGES.SIGN_OUT) {
    fadeOut();
    Cookies.remove('greendream-user');
    return showStatsBar(MESSAGES.STATS_SIGNOUT_SUCCESS, false, true);
  }

  return modal >= 0 ? toggleModal() : toggleModal(getNewModal(itemName, modal));
}

export function MenuItem(props) {
  const {
    itemName,
    itemPath,
    itemType,
    modal,
    toggleModal,
    showStatsBar,
    fadeOut,
  } = props;

  return (
    <Link
      className={classNames(
        'menu-item-rct-component',
        itemType,
      )}
      color={colors.white}
      href={`${process.env.PUBLIC_URL}${itemPath}`}
      onClick={() => decideOnName(itemName, modal, toggleModal, showStatsBar, fadeOut)}
    >
      <li>{itemName}</li>
    </Link>
  );
}

MenuItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemPath: PropTypes.string,
  itemType: PropTypes.string.isRequired,
  modal: PropTypes.number,
  toggleModal: PropTypes.func,
  showStatsBar: PropTypes.func,
  fadeOut: PropTypes.func,
};

MenuItem.defaultProps = {
  itemPath: '#',
  modal: -1,
  toggleModal: () => null,
  showStatsBar: () => null,
  fadeOut: () => null,
};

