import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { PageTitle, ContentRow } from 'components';
import { MESSAGES } from 'utils/messages';
import './about-page.scss';

function renderRows(paragraphs) {
  return paragraphs.map((paragraph, i, arr) => {
    const {
      rowMainContent,
      rowPicture,
      pictureDimensions,
      rowOrder,
    } = paragraph;

    const contentRowProps = {
      rowMainContent,
      rowPicture,
      pictureDimensions,
      rowOrder,
      lastRow: arr.length - 1 === i,
    };

    return (i === 2) ? (
      <Fragment key={paragraph.key}>
        <ContentRow key={paragraph.key} {...contentRowProps} />
        <PageTitle title={MESSAGES.ABOUT_TITLE_2} />
      </Fragment>
    ) : <ContentRow key={paragraph.key} {...contentRowProps} />;
  });
}

export function AboutPage({ paragraphs }) {
  return (
    <Flex as="section" className="about-page-rct-component">
      {renderRows(paragraphs)}
    </Flex>
  );
}

AboutPage.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.shape({
    rowMainContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    rowPicture: PropTypes.string,
    pictureDimensions: PropTypes.shape({
      maxWidth: PropTypes.number,
      minWidth: PropTypes.number,
    }),
    rowOrder: PropTypes.oneOf(['normal', 'reverse']),
  })).isRequired,
};
