import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { PageBody, PageTitle } from 'components';
import './page-container.scss';

function renderPageTitle(titleContent) {
  return titleContent ? <PageTitle {...titleContent} /> : null;
}

export function PageContainer({ bodyContent, titleContent }) {
  return (
    <Flex as="section" className="page-container-rct-component">
      {renderPageTitle(titleContent)}
      <PageBody {...bodyContent} />
    </Flex>
  );
}

PageContainer.propTypes = {
  bodyContent: PropTypes.shape({
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  }).isRequired,
  titleContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleImage: PropTypes.string,
    order: PropTypes.oneOf(['normal', 'reverse']),
    isPreview: PropTypes.bool,
  }),
};

PageContainer.defaultProps = {
  titleContent: null,
};

