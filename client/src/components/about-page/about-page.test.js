import React from 'react';
import { AboutPage } from 'components';
import { injectItemKey } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';

describe('AboutPage Component Unit Test', () => {
  const paragraphs = [
    {
      rowMainContent: MESSAGES.ABOUT_PARAGRAPH_1,
    },
    {
      rowMainContent: MESSAGES.ABOUT_PARAGRAPH_2,
    },
  ].map(injectItemKey);

  const wrapper = mountWithIntl(
    <AboutPage paragraphs={paragraphs} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the right amount of ContentRow components', () => {
    expect(wrapper.find('ContentRow')).toHaveLength(paragraphs.length);
  });
});
