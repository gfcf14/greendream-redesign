import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { Flex } from 'rebass';
import { getImageSource, FLUID_DIM } from 'utils/helpers';
import './content-row.scss';

const SiteImage = styled.img`
  ${props => FLUID_DIM('width', props['width'].min, props['width'].max)};
  ${props => FLUID_DIM('height', props['height'].min, props['height'].max)};
`;

const RowWithImage = styled.p`
  width: calc(100% - ${props => (props.isDesktop ? '60' : '30')}px - ${props => `${props['width'].min}px + (${props['width'].max} - ${props['width'].min}) * ((100vw - 360px) / 1006)`});
`;

function renderMainContent(isDesktop, props) {
  const {
    rowMainContent,
    rowOrder,
    rowPicture,
    pictureDimensions,
  } = props;

  if (rowMainContent.type === undefined) {
    return rowPicture ? (
      <RowWithImage
        className={classNames(
          'content-row-rct-component__row-text',
          rowOrder,
        )}
        {...pictureDimensions}
        isDesktop={isDesktop}
      >
        {rowMainContent}
      </RowWithImage>
    ) : (
      <p
        className={classNames(
          'content-row-rct-component__row-text',
          rowOrder,
        )}
      >
        {rowMainContent}
      </p>
    );
  }

  return rowMainContent;
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
    isDesktop,
  } = props;

  const mainContentProps = {
    rowMainContent,
    rowOrder,
    rowPicture,
    pictureDimensions,
  };

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
      {renderMainContent(isDesktop, mainContentProps)}
    </Flex>
  );
}

ContentRow.propTypes = {
  rowMainContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  rowPicture: PropTypes.string,
  pictureDimensions: PropTypes.shape({
    height: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    width: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
  }),
  rowOrder: PropTypes.oneOf(['normal', 'reverse']),
  lastRow: PropTypes.bool,
  isDesktop: PropTypes.bool.isRequired,
};

ContentRow.defaultProps = {
  rowPicture: '',
  pictureDimensions: {
    height: {
      min: 0,
      max: 0,
    },
    width: {
      min: 0,
      max: 0,
    },
  },
  rowOrder: 'normal',
  lastRow: false,
};
