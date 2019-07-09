import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { Flex } from 'rebass';
import dimensions from 'styles/_mixins.scss';
import { getImageSource } from 'utils/helpers';
import './content-row.scss';

const FLUID_WIDTH = (minWidth, maxWidth) => css`
  width: calc(${minWidth}px + (${maxWidth} - ${minWidth}) * ((${dimensions.maxViewportWidth} - ${dimensions.minWindowWidth}) / 1006));
`;

const SiteImage = styled.img`
  ${props => FLUID_WIDTH(props.minWidth, props.maxWidth)};
`;

function renderMainContent(rowMainContent, rowOrder) {
  return rowMainContent.type === undefined ? (
    <p
      className={classNames(
        'content-row-rct-component__row-text',
        rowOrder,
      )}
    >
      {rowMainContent}
    </p>
  ) : rowMainContent;
}

function renderPicture(rowPicture, pictureDimensions, rowOrder) {
  if (rowPicture === '') return null;

  const pictureSource = getImageSource(rowPicture);

  return (
    <SiteImage
      src={pictureSource}
      className={classNames(
        'content-row-rct-component__row-picture',
        rowOrder,
      )}
      alt="row-picture"
      {...pictureDimensions}
    />
  );
}

export function ContentRow(props) {
  const {
    rowMainContent,
    rowPicture,
    pictureDimensions,
    rowOrder,
    lastRow,
  } = props;

  return (
    <Flex
      as="section"
      className={classNames(
        'content-row-rct-component',
        rowOrder,
        lastRow ? 'last' : '',
      )}
    >
      {renderPicture(rowPicture, pictureDimensions, rowOrder)}
      {renderMainContent(rowMainContent, rowOrder)}
    </Flex>
  );
}

ContentRow.propTypes = {
  rowMainContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  rowPicture: PropTypes.string,
  pictureDimensions: PropTypes.shape({
    maxWidth: PropTypes.number,
    minWidth: PropTypes.number,
  }),
  rowOrder: PropTypes.oneOf(['normal', 'reverse']),
  lastRow: PropTypes.bool,
};

ContentRow.defaultProps = {
  rowPicture: '',
  pictureDimensions: {
    maxWidth: 0,
    minWidth: 0,
  },
  rowOrder: 'normal',
  lastRow: false,
};
