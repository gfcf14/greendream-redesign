import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Image } from 'rebass';
import { getImageSource } from 'utils/helpers';
import './page-title.scss';

function renderImage(titleImage, isPreview) {
  return titleImage ? (
    <Image
      src={getImageSource(titleImage)}
      className={classNames(
        'title-image',
        isPreview ? 'preview' : '',
      )}
      alt="title-image"
    />
  ) : null;
}

export function PageTitle(props) {
  const {
    title,
    titleImage,
    order,
    isPreview,
  } = props;

  return (
    <Flex
      as="section"
      className={classNames(
        'page-title-rct-component',
        order,
      )}
    >
      <h2 className="title-text">{title}</h2>
      {renderImage(titleImage, isPreview)}
    </Flex>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  titleImage: PropTypes.string,
  order: PropTypes.oneOf(['normal', 'reverse']),
  isPreview: PropTypes.bool,
};

PageTitle.defaultProps = {
  titleImage: '',
  order: 'normal',
  isPreview: false,
};

