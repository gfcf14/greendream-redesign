import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import './page-title.scss';

export function PageTitle({ title }) {
  return (
    <Flex as="section" className="page-title-rct-component">
      {title}
    </Flex>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

