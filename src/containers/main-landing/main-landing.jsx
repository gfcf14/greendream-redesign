import React from 'react';
import { Flex, Image } from 'rebass';
import { logoImage } from 'images';
import { Menu } from 'components';
import './main-landing.scss';

export function MainLanding() {
  return (
    <Flex as="section" className="main-landing-rct-component">
      <Image
        src={logoImage}
        className="logo"
        alt="logo"
      />
      <Menu />
    </Flex>
  );
}

