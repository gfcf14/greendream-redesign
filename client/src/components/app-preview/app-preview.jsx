import React, { useEffect, useState } from 'react';
import { Link as DownloadLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Flex, Link as OldAppLink } from 'rebass';
import {
  GameControls,
  PageButton,
  PlaysSpan,
  ProgramSpecs,
} from 'components';
import { APPS_PREVIEW, DOWNLOADABLE_APPS } from 'utils/constants';
import { getRow, incrementCount } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './app-preview.scss';

function renderPageButton(
  buttonText,
  isDownloadable,
  rowName,
  tableName,
  setRowData,
) {
  if (isDownloadable) {
    return (
      <DownloadLink
        to={`/downloads/${DOWNLOADABLE_APPS[`${rowName}`]}`}
        target="_blank"
        download
        onClick={() => incrementCount(rowName, tableName, 'imgurl', setRowData)}
      >
        <PageButton buttonText={buttonText} />
      </DownloadLink>
    );
  }

  return (
    <OldAppLink
      className="old-app-link"
      href={`${process.env.PUBLIC_URL}/${tableName.toLowerCase()}/${rowName}/${rowName}`}
      onClick={() => incrementCount(rowName, tableName, 'imgurl', setRowData)}
    >
      <PageButton buttonText={buttonText} />
    </OldAppLink>
  );
}

function renderAppInfo(tableName, rowName) {
  return tableName === 'Games' ? (
    <GameControls gameName={rowName} />
  ) : <ProgramSpecs programName={rowName} />;
}

function renderPlayRow(
  rowName,
  rowTitle,
  rowData,
  tableName,
  setRowData,
) {
  if (rowData.length !== 0) {
    const { CLICK_HERE_TO_DOWNLOAD, CLICK_HERE_TO_PLAY } = MESSAGES;
    const isDownloadable = Object.keys(DOWNLOADABLE_APPS).includes(rowName);
    const buttonAction = isDownloadable ? CLICK_HERE_TO_DOWNLOAD : CLICK_HERE_TO_PLAY;
    const buttonText = `${buttonAction} ${rowTitle}`;

    return (
      <Flex className="app-preview-rct-component__play-row">
        {renderPageButton(buttonText, isDownloadable, rowName, tableName, setRowData)}
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
      {renderPlayRow(rowName, rowTitle, rowData, tableName, setRowData)}
    </Flex>
  );
}

AppPreview.propTypes = {
  rowName: PropTypes.string.isRequired,
  rowTitle: PropTypes.string.isRequired,
  tableName: PropTypes.string.isRequired,
};
