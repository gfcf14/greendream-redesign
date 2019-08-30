import React, { useEffect, useState } from 'react';
import { Flex, Link } from 'rebass';
import classNames from 'classnames';
import { PageButton } from 'components';
import {
  SLIDESHOW_IMAGE_DURATION,
  SLIDESHOW_DESCRIPTIONS,
  SLIDESHOW_IMAGES,
  SLIDESHOW_LINKS,
} from 'utils/constants';
import { getModulusIndex } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './home-page.scss';

function getBackgroundIndex(backgroundIndex) {
  return getModulusIndex(SLIDESHOW_IMAGES, backgroundIndex, 'bottom');
}

export function HomePage() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line no-shadow
      setBackgroundIndex(backgroundIndex => backgroundIndex + 1);
    }, SLIDESHOW_IMAGE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex as="section" className="home-page-rct-component">
      <Link
        className="home-page-rct-component__slideshow-link"
        href={`${process.env.PUBLIC_URL}/${getModulusIndex(SLIDESHOW_LINKS, backgroundIndex)}`}
      >
        <Flex
          className="slideshow-container"
          style={{ backgroundImage: `url(${getBackgroundIndex(backgroundIndex)}` }}
        >
          <Flex
            className={classNames(
              'background-image',
              backgroundIndex % 2 === 1 ? 'hide' : '',
            )}
            style={{ backgroundImage: `url(${getModulusIndex(SLIDESHOW_IMAGES, backgroundIndex, 'top')})` }}
          />
          <div className="image-descriptor">
            {getModulusIndex(SLIDESHOW_DESCRIPTIONS, backgroundIndex)}
          </div>
        </Flex>
      </Link>
      <span className="home-page-rct-component__welcome-text">
        {MESSAGES.HOMEPAGE}
      </span>
      <PageButton buttonText={MESSAGES.HOMEPAGE_BUTTON} isAtHomePage />
    </Flex>
  );
}
