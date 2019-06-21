import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import './page-body.scss';

export function PageBody({ content }) {
  return (
    <Flex as="section" className="page-body-rct-component">
      {content}
    </Flex>
  );
}

PageBody.propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

