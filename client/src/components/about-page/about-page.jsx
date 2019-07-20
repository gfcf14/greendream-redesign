import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { PageTitle, ContentRow } from 'components';
import { MESSAGES } from 'utils/messages';
import breakpoints from 'styles/_layout.scss';
import './about-page.scss';

function renderRows(paragraphs, isDesktop) {
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
      isDesktop: pictureDimensions ? isDesktop : false,
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
  const [isDesktop, setDesktop] = useState(true);
  useEffect(() => {
    const checkViewPortSize = () => {
      if (window.innerWidth >= parseInt(breakpoints.md, 10)) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };

    checkViewPortSize();
    window.addEventListener('resize', checkViewPortSize);
  });

  return (
    <Flex as="section" className="about-page-rct-component">
      {renderRows(paragraphs, isDesktop)}
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
