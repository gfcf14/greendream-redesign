import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Image } from 'rebass';
import './page-title.scss';

function renderImage(titleImage) {
  return titleImage ? <Image src={titleImage} className="title-image" alt="title-image" /> : null;
}

export function PageTitle({ title, titleImage, order }) {
  return (
    <Flex
      as="section"
      className={classNames(
        'page-title-rct-component',
        order,
      )}
    >
      <h2>{title}</h2>
      {renderImage(titleImage)}
    </Flex>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  titleImage: PropTypes.string,
  order: PropTypes.oneOf(['normal', 'reverse']),
};

PageTitle.defaultProps = {
  titleImage: '',
  order: 'normal',
};

