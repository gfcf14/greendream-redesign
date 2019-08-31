import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, Link } from 'rebass';
import classNames from 'classnames';
import { PageButton } from 'components';
import {
  FORM_CONFIGS,
  SLIDESHOW_IMAGE_DURATION,
  SLIDESHOW_DESCRIPTIONS,
  SLIDESHOW_IMAGES,
  SLIDESHOW_LINKS,
} from 'utils/constants';
import { getModulusIndex } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './home-page.scss';

function decideOnLength(modal, toggleModal) {
  return modal === FORM_CONFIGS.length ? toggleModal(-1) : toggleModal(FORM_CONFIGS.length);
}

function getBackgroundIndex(backgroundIndex) {
  return getModulusIndex(SLIDESHOW_IMAGES, backgroundIndex, 'bottom');
}

export function HomePage({ menu, modal, toggleModal }) {
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
          <div
            className={classNames(
              'image-descriptor',
              menu ? 'deeper' : '',
            )}
          >
            {getModulusIndex(SLIDESHOW_DESCRIPTIONS, backgroundIndex)}
          </div>
        </Flex>
      </Link>
      <span className="home-page-rct-component__welcome-text">
        {MESSAGES.HOMEPAGE}
      </span>
      <PageButton
        buttonText={MESSAGES.HOMEPAGE_BUTTON}
        isAtHomePage
        onClick={() => decideOnLength(modal, toggleModal)}
      />
    </Flex>
  );
}

HomePage.propTypes = {
  menu: PropTypes.bool,
  modal: PropTypes.number,
  toggleModal: PropTypes.func,
};

HomePage.defaultProps = {
  menu: false,
  modal: -1,
  toggleModal: () => null,
};
