import React from 'react';
import { Flex } from 'rebass';
import { PageTitle } from 'components';
import './page-container.scss';

export function PageContainer() {
  return (
    <Flex as="section" className="page-container-rct-component">
      <PageTitle title="SAMPLE" />
    </Flex>
  );
}

