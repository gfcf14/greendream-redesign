import React from 'react';
import { Flex, Image } from 'rebass';
import { logoImage, vortexImage } from 'images';
import './not-found.scss';

export function NotFound() {
  return (
    <Flex as="section" className="not-found-rct-component">
      <section className="not-found-rct-component__text-section">
        <p className="center-text">
          404 page not found
        </p>
        <p className="bottom-text">
          Don't worry! Click here to go back to the homepage
        </p>
      </section>
      <section className="not-found-rct-component__rotated-section">
        <Image
          src={vortexImage}
          className="vortex"
          alt="vortex"
        />
      </section>
      <section className="not-found-rct-component__logo-section">
        <Image
          src={logoImage}
          className="logo"
          alt="logo"
        />
      </section>
    </Flex>
  );
}

