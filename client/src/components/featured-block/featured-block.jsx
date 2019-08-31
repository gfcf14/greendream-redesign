import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Image, Link } from 'rebass';
import { getImageSource } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './featured-block.scss';

function getPage(image) {
  return image !== 'icon' ? `/${image}` : '';
}

export function FeaturedBlock(props) {
  const {
    blockType,
    image,
    isNew,
    message,
    title,
  } = props;

  const { FEATURED_NEW, FEATURED_UPDATED } = MESSAGES;
  return (
    <Link
      className={classNames(
        'featured-block-rct-component',
        blockType,
      )}
      href={`${process.env.PUBLIC_URL}/${blockType}${getPage(image)}`}
    >
      <Flex as="section" className="featured-block-rct-component__outer-block">
        <Flex
          className={classNames(
            'title-bar',
            'vertical',
          )}
        >
          <span
            className={classNames(
              'title-text',
              'vertical',
            )}
          >
            {title}
          </span>
        </Flex>
        <Flex
          className={classNames(
            'inner-block',
            blockType,
          )}
        >
          <Flex className="image-container">
            <Image
              className="block-image"
              alt="block-image"
              src={getImageSource(image)}
            />
          </Flex>
          <Flex className="content-container">
            <span className="title">
              {isNew ? FEATURED_NEW : FEATURED_UPDATED}
            </span>
            <span className="description">
              {message}
            </span>
          </Flex>
        </Flex>
        <Flex
          className={classNames(
            'title-bar',
            'horizontal',
          )}
        >
          <span className="title-text">
            {title}
          </span>
        </Flex>
      </Flex>
    </Link>
  );
}

FeaturedBlock.propTypes = {
  blockType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};
