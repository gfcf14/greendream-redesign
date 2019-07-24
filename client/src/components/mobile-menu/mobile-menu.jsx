import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import classNames from 'classnames';
import { MenuItem, MenuSeparator } from 'components';
import { renderMenuItems } from 'utils/helpers';
import { ACCOUNT_ROUTES } from 'utils/routes';
import './mobile-menu.scss';
import { MESSAGES } from 'utils/messages';

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

export function MobileMenu({
  menu,
  toggleMenu,
  modal,
  toggleModal,
}) {
  return (
    <Box className={classNames(
      'mobile-menu-rct-component',
      menu ? 'open' : 'closed',
    )}
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

