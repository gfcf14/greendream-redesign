import React from 'react';
import { Flex } from 'rebass';
import { PageBody, PageTitle } from 'components';
import './page-container.scss';

export function PageContainer() {
  return (
    <Flex as="section" className="page-container-rct-component">
      <PageTitle title="SAMPLE" />
      <PageBody content="" />
    </Flex>
  );
}

