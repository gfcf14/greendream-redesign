import React from 'react';
import { Flex } from 'rebass';
import { PageButton } from 'components';
import { programsImage } from 'images';
import { MESSAGES } from 'utils/messages';
import './home-page.scss';

export function HomePage() {
  return (
    <Flex as="section" className="home-page-rct-component">
      <Flex
        className="home-page-rct-component__slideshow-container"
        style={{ backgroundImage: `url(${programsImage})` }}
      >
        <div className="image-descriptor">
          {MESSAGES.SLIDESHOW_PROGRAMS}
        </div>
      </Flex>
      <span className="home-page-rct-component__welcome-text">
        {MESSAGES.HOMEPAGE}
      </span>
      <PageButton buttonText={MESSAGES.HOMEPAGE_BUTTON} />
    </Flex>
  );
}

