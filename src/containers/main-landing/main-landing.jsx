import React from 'react';
import { Flex, Image } from 'rebass';
import { logoImage } from 'images';
import { Menu } from 'components';
import { PageContainer } from 'containers';
import './main-landing.scss';

export function MainLanding() {
  return (
    <Flex as="section" className="main-landing-rct-component">
      <Flex as="section" className="main-landing-rct-component__header">
        <Flex as="section" className="background">
          <Image
            src={logoImage}
            className="logo"
            alt="logo"
          />
          <Menu />
        </Flex>
      </Flex>
      <PageContainer />
    </Flex>
  );
}

