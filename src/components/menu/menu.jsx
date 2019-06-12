import React, { useEffect, useState } from 'react';
import { Box, Flex, Image } from 'rebass';
import classNames from 'classnames';
import {
  ContactButton,
  MenuButton,
  MenuItem,
  MenuSeparator,
} from 'components';
import { ModalBackground } from 'containers';
import { ACCOUNT_ROUTES, MENU_ROUTES } from 'utils/routes';
import { sandwhichIcon } from 'images';
import breakpoints from 'styles/_layout.scss';
import './menu.scss';

const leftButtonProps = {
  buttonType: 'sign-up',
  position: 'left',
};

const rightbuttonProps = {
  buttonType: 'sign-in',
  position: 'right',
};

function renderAccountItems() {
  return ACCOUNT_ROUTES.map((route) => {
    const accountItemProps = {
      itemName: route.name,
      itemType: 'mobile',
    };

    return <MenuItem key={route.key} {...accountItemProps} />;
  });
}

function renderMenuItems(menuType) {
  return MENU_ROUTES.map((route) => {
    const { name, path } = route;

    const menuItemProps = {
      itemName: name,
      itemPath: path,
      itemType: menuType,
    };

    return <MenuItem key={route.key} {...menuItemProps} />;
  });
}

export function Menu() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const resetMenu = () => {
      if (window.innerWidth >= parseInt(breakpoints.md, 10) && menu) {
        setMenu(false);
      }
    };

    window.addEventListener('resize', resetMenu);
  });

  function toggleMenu(showMenu) {
    setMenu(showMenu);
  }

  return (
    <Flex as="section" className="menu-rct-component">
      <Flex as="ul" className="menu-list">
        {renderMenuItems('desktop')}
      </Flex>
      <ContactButton />
      <Image
        src={sandwhichIcon}
        className="sandwhich-icon"
        alt="sandwhich-icon"
        onClick={() => toggleMenu(!menu)}
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
        {renderMenuItems('tablet')}
      </Box>
      <Box className={classNames(
        'mobile-menu',
        menu ? 'open' : 'closed',
      )}
      >
        <button className="close-button" onClick={() => toggleMenu(!menu)} tabIndex="0">X</button>
        <Box className="menus-container">
          <MenuSeparator separatorTitle="MENU" />
          <Flex
            as="ul"
            className="main-menu"
          >
            {renderMenuItems('mobile')}
          </Flex>
          <MenuSeparator separatorTitle="ACCOUNT" />
          <Flex
            as="ul"
            className="account-menu"
          >
            {renderAccountItems()}
          </Flex>
        </Box>
      </Box>
      <ModalBackground isVisible={menu ? 'visible' : 'hidden'} onClick={() => toggleMenu(!menu)} />
    </Flex>
  );
}

