import React, { useEffect, useState } from 'react';
import { Box, Flex, Image } from 'rebass';
import classNames from 'classnames';
import { ContactButton, MenuButton, MenuSeparator } from 'components';
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
  return ACCOUNT_ROUTES.map(route => <li key={route.key}>{route.name}</li>);
}

function renderMenuItems() {
  return MENU_ROUTES.map(route => <li key={route.key}>{route.name}</li>);
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
        {renderMenuItems()}
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
        {renderMenuItems()}
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
            {renderMenuItems()}
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

