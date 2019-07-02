import React from 'react';
import { Flex, Image, Link } from 'rebass';
import PropTypes from 'prop-types';
import { logoImage } from 'images';
import { Menu } from 'components';
import './main-landing.scss';

export function MainLanding({ contentComponent }) {
  return (
    <Flex as="section" className="main-landing-rct-component">
      <Flex as="section" className="main-landing-rct-component__header">
        <Flex as="section" className="background">
          <Link href={`${process.env.PUBLIC_URL}/`}>
            <Image
              src={logoImage}
              className="logo"
              alt="logo"
            />
          </Link>
          <Menu />
        </Flex>
      </Flex>
      {contentComponent}
    </Flex>
  );
}

MainLanding.propTypes = {
  contentComponent: PropTypes.element.isRequired,
};

