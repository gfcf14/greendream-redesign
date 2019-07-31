import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Image } from 'rebass';
import { getImageSource } from 'utils/helpers';
import './menu-button.scss';

function getNewModal(modal, position) {
  if (modal >= 0) {
    return -1;
  }

  return position === 'left' ? 1 : 2;
}

export function MenuButton({
  buttonType,
  position,
  modal,
  toggleModal,
}) {
  return (
    <button
      className={classNames(
        'menu-button-rct-component',
        position,
      )}
      onClick={() => toggleModal(getNewModal(modal, position))}
    >
      <Image
        src={getImageSource(buttonType)}
        className="menu-button-rct-component__icon"
        alt="menu-button-icon"
      />
    </button>
  );
}

MenuButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  modal: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
