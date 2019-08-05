import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import classNames from 'classnames';
import { MenuItem, MenuSeparator } from 'components';
import { renderMenuItems } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import { FORM_ROUTES, SESSION_ROUTES } from 'utils/routes';
import './mobile-menu.scss';

let mobileMenu = '';

function renderAccountItems(modal, toggleModal, isLoggedIn, showStatsBar, fadeOut) {
  const chosenRoutes = isLoggedIn === '' ? FORM_ROUTES : SESSION_ROUTES;

  return chosenRoutes.map((route) => {
    const accountItemProps = {
      itemName: route.name,
      itemType: 'mobile',
      itemPath: route.name === MESSAGES.PROFILE ?
        `${process.env.PUBLIC_URL}/profile?user=${isLoggedIn}` : '#',
      modal,
      toggleModal,
      isLoggedIn,
      showStatsBar,
      fadeOut,
    };

    return <MenuItem key={route.key} {...accountItemProps} />;
  });
}

function hideIfOut(menu) {
  if (!menu) {
    mobileMenu.classList.add('should-hide');
  }
}

export function MobileMenu(props) {
  const {
    menu,
    toggleMenu,
    modal,
    toggleModal,
    isLoggedIn,
    showStatsBar,
    fadeOut,
  } = props;

  useEffect(() => {
    mobileMenu = document.querySelector('.mobile-menu-rct-component');
    if (mobileMenu) {
      mobileMenu.classList.add('should-hide');
    }
  }, []);

  return (
    <Box
      className={classNames(
        'mobile-menu-rct-component',
        menu ? 'open' : 'closed',
      )}
      onTransitionEnd={() => hideIfOut(menu)}
    >
      <button className="close-button" onClick={() => toggleMenu(!menu)} tabIndex="0">X</button>
      <Box className="menu-container">
        <MenuSeparator separatorTitle={MESSAGES.SEPARATOR_MENU} />
        <Flex
          as="ul"
          className="main-menu"
        >
          {renderMenuItems('mobile', modal, toggleModal)}
        </Flex>
        <MenuSeparator separatorTitle={MESSAGES.SEPARATOR_ACCOUNT} />
        <Flex
          as="ul"
          className="account-menu"
        >
          {renderAccountItems(modal, toggleModal, isLoggedIn, showStatsBar, fadeOut)}
        </Flex>
      </Box>
    </Box>
  );
}

MobileMenu.propTypes = {
  menu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  modal: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.string.isRequired,
  showStatsBar: PropTypes.func.isRequired,
  fadeOut: PropTypes.func.isRequired,
};

