import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { PageTable } from 'components';
import './apps-page.scss';

export function AppsPage({ description, tableName }) {
  return (
    <Flex as="section" className="apps-page-rct-component">
      <p className="table-description">{description}</p>
      <PageTable tableName={tableName} />
    </Flex>
  );
}

AppsPage.propTypes = {
  description: PropTypes.string.isRequired,
  tableName: PropTypes.string.isRequired,
};

