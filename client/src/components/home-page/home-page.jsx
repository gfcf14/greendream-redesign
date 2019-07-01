import React from 'react';
import { Flex } from 'rebass';
import { PageButton } from 'components';
import { programsImage } from 'images';
import './home-page.scss';

export function HomePage() {
  return (
    <Flex as="section" className="home-page-rct-component">
      <Flex
        className="home-page-rct-component__slideshow-container"
        style={{ backgroundImage: `url(${programsImage})` }}
      >
        <div className="image-descriptor">
          PROGRAMS: Non-gaming programs I've developed
        </div>
      </Flex>
      <span className="home-page-rct-component__welcome-text">
        Welcome to GreenDream! Where it's all about software development and what the
         joy of creating means. May the programs, games and tutorials here inspire you to create!
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
         ullamco laboris nisi ut aliquip ex ea commodo
      </span>
      <PageButton buttonText="WHAT'S NEW?" />
    </Flex>
  );
}

