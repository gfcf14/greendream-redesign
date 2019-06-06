import React from 'react';
import { Flex } from 'rebass';
import { ContactButton, MenuButton } from 'components';
import { ROUTES } from 'utils/routes';
import './menu.scss';

const leftButtonProps = {
  buttonType: 'sign-up',
  position: 'left',
};

const rightbuttonProps = {
  buttonType: 'sign-in',
  position: 'right',
};

function renderMenuItems() {
  return ROUTES.map(route => <li key={route.key}>{route.name}</li>);
}

export function Menu() {
  return (
    <Flex as="section" className="menu-rct-component">
      <Flex as="ul" className="menu-list">
        {renderMenuItems()}
      </Flex>
      <ContactButton />
      <div className="division" />
      <MenuButton {...leftButtonProps} />
      <MenuButton {...rightbuttonProps} />
    </Flex>
  );
}

