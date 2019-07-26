import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import classNames from 'classnames';
import { MenuItem, MenuSeparator } from 'components';
import { renderMenuItems } from 'utils/helpers';
import { ACCOUNT_ROUTES } from 'utils/routes';
import './mobile-menu.scss';
import { MESSAGES } from 'utils/messages';

let mobileMenu = '';

function renderAccountItems(modal, toggleModal) {
  return ACCOUNT_ROUTES.map((route) => {
    const accountItemProps = {
      itemName: route.name,
      itemType: 'mobile',
      modal,
      toggleModal,
    };

    return <MenuItem key={route.key} {...accountItemProps} />;
  });
}

function hideIfOut(menu) {
  if (!menu) {
    mobileMenu.classList.add('should-hide');
  }
}

export function MobileMenu({
  menu,
  toggleMenu,
  modal,
  toggleModal,
}) {
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
          {renderAccountItems(modal, toggleModal)}
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
};

