import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';
import { Flex } from 'rebass';
import { FeaturedBlock } from 'components';
import { FEATURED_CONFIGS, FORM_CONFIGS } from 'utils/constants';
import './modal-view.scss';

function renderContent(type) {
  if (type === 'featured') {
    return Object.keys(FEATURED_CONFIGS).map((key) => {
      const featuredBlockProps = {
        ...FEATURED_CONFIGS[`${key}`],
        blockType: key,
      };

      return <FeaturedBlock key={shortid.generate()} {...featuredBlockProps} />;
    });
  }

  return null;
}

export function ModalView(props) {
  const {
    fadeOut,
    modal,
    title,
    type,
  } = props;

  return (
    <Flex
      as="section"
      className={classNames(
        'modal-view-rct-component',
        modal === FORM_CONFIGS.length ? 'modal' : '',
        // isBigger && type === 'signup' ? 'bigger' : '',
      )}
    >
      <Flex className="modal-view-rct-component__title-bar">
        <p className="title-text">
          {title}
        </p>
        <Flex className="close-button" onClick={() => fadeOut()}>
          <span>X</span>
        </Flex>
      </Flex>
      <Flex className="modal-view-rct-component__content-container">
        {renderContent(type)}
      </Flex>
    </Flex>
  );
}

ModalView.propTypes = {
  fadeOut: PropTypes.func.isRequired,
  modal: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
