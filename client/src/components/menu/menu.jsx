import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Image } from 'rebass';
import classNames from 'classnames';
import { ContactButton, MenuButton } from 'components';
import { MENU_BUTTON_TYPES } from 'utils/constants';
import { renderMenuItems } from 'utils/helpers';
import { sandwhichIcon } from 'images';
import './menu.scss';


function getButtonType(isLoggedIn, position) {
  return MENU_BUTTON_TYPES[`${position}`][`${+(isLoggedIn !== 'no')}`];
}

function showMobileFirst(toggleMenu, menu) {
  const mobileMenu = document.querySelector('.mobile-menu-rct-component');
  if (mobileMenu) {
    mobileMenu.classList.remove('should-hide');
    setTimeout(() => {
      toggleMenu(!menu);
    }, 20);
  }
}

export function Menu(props) {
  const {
    menu,
    toggleMenu,
    modal,
    toggleModal,
    isLoggedIn,
    showStatsBar,
  } = props;

  const buttonProps = {
    modal,
    toggleModal,
    isLoggedIn,
    showStatsBar,
  };

  const leftButtonProps = {
    buttonType: isLoggedIn === 'waiting' ? isLoggedIn : getButtonType(isLoggedIn, 'left'),
    position: 'left',
    ...buttonProps,
  };

  const rightbuttonProps = {
    buttonType: isLoggedIn === 'waiting' ? isLoggedIn : getButtonType(isLoggedIn, 'right'),
    position: 'right',
    ...buttonProps,
  };

  return (
    <Flex as="section" className="menu-rct-component">
      <Flex as="ul" className="menu-list">
        {renderMenuItems('desktop', modal, toggleModal)}
      </Flex>
      <ContactButton {...buttonProps} />
      <Image
        src={sandwhichIcon}
        className="sandwhich-icon"
        alt="sandwhich-icon"
        onClick={() => showMobileFirst(toggleMenu, menu)}
      />
      <div className="division" />
      <MenuButton {...leftButtonProps} />
      <MenuButton {...rightbuttonProps} />
      <Box
        as="ul"
        className={classNames(
          'tablet-menu',
          menu ? 'open' : 'closed',
        )}
      >
        {renderMenuItems('tablet', modal, toggleModal)}
      </Box>
    </Flex>
  );
}

Menu.propTypes = {
  menu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  modal: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.string.isRequired,
  showStatsBar: PropTypes.func.isRequired,
};

