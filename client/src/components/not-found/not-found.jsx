import React from 'react';
import { Flex, Image, Link } from 'rebass';
import { logoImage, vortexImage } from 'images';
import colors from 'styles/_colors.scss';
import './not-found.scss';

export function NotFound() {
  return (
    <Flex as="section" className="not-found-rct-component">
      <section className="not-found-rct-component__text-section">
        <p className="center-text">
          404 page not found
        </p>
        <Link
          className="bottom-text"
          color={colors.white}
          href={`${process.env.PUBLIC_URL}/`}
        >
          Don't worry! Click here to go back to the homepage
        </Link>
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

