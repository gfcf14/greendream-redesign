import React from 'react';
import { ContentRow } from 'components';
import { MESSAGES } from 'utils/messages';

describe('ContentRow Component Unit Test', () => {
  const contentRowProps = {
    rowMainContent: MESSAGES.ABOUT_PARAGRAPH_2,
    rowPicture: 'me-hi',
    pictureDimensions: {
      height: {
        min: 166,
        max: 221,
      },
      width: {
        min: 60,
        max: 80,
      },
    },
    isDesktop: true,
  };

  const wrapper = mountWithIntl(
    <ContentRow {...contentRowProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the image for rowPicture', () => {
    expect(wrapper.find('img.content-row-rct-component__row-picture')).toHaveLength(1);
  });
});
