import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import {
  GameControls,
  PageButton,
  PlaysSpan,
  ProgramSpecs,
} from 'components';
import { APPS_PREVIEW, DOWNLOADABLE_APPS } from 'utils/constants';
import { getRow } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './app-preview.scss';

function renderAppInfo(tableName, rowName) {
  return tableName === 'Games' ? (
    <GameControls gameName={rowName} />
  ) : <ProgramSpecs programName={rowName} />;
}

function renderPlayRow(rowName, rowTitle, rowData) {
  if (rowData.length !== 0) {
    const { CLICK_HERE_TO_DOWNLOAD, CLICK_HERE_TO_PLAY } = MESSAGES;
    const buttonAction = DOWNLOADABLE_APPS.includes(rowName) ? CLICK_HERE_TO_DOWNLOAD
      : CLICK_HERE_TO_PLAY;
    const buttonText = `${buttonAction} ${rowTitle}`;

    return (
      <Flex className="app-preview-rct-component__play-row">
        <PageButton buttonText={buttonText} />
        <PlaysSpan playsNumber={rowData[0].count} />
      </Flex>
    );
  }

  return null;
}

export function AppPreview({ rowName, rowTitle, tableName }) {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const getFirst = () => {
      getRow(rowName, tableName, 'imgurl', setRowData);
    };

    getFirst();
  }, []);

  return (
    <Flex as="section" className="app-preview-rct-component">
      <span className="app-preview-rct-component__app-description">
        {APPS_PREVIEW[`${rowName}`]}
      </span>
      {renderAppInfo(tableName, rowName)}
      {renderPlayRow(rowName, rowTitle, rowData)}
    </Flex>
  );
}

AppPreview.propTypes = {
  rowName: PropTypes.string.isRequired,
  rowTitle: PropTypes.string.isRequired,
  tableName: PropTypes.string.isRequired,
};
