import React from 'react';
import { Flex } from 'rebass';
import { TutorialsTable } from 'components';
import { MESSAGES } from 'utils/messages';
import './tutorials-page.scss';

export function TutorialsPage() {
  return (
    <Flex as="section" className="tutorials-page-rct-component">
      <p className="tutorials-description">{MESSAGES.TUTORIALS}</p>
      <TutorialsTable />
    </Flex>
  );
}

