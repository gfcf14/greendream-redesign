import React from 'react';
import { FeaturedBlock } from 'components';
import { MESSAGES } from 'utils/messages';

describe('FeaturedBlock Component Unit Test', () => {
  const featuredBlockProps = {
    blockType: 'programs',
    image: 'icon',
    isNew: true,
    message: 'sample',
  };

  const wrapper = mountWithIntl(
    <FeaturedBlock {...featuredBlockProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the inner block contains the correct class', () => {
    expect(wrapper.find('div.inner-block').hasClass(featuredBlockProps.blockType)).toBe(true);
  });

  it('checks for a correct block hyperlink', () => {
    const expectedHref = `${process.env.PUBLIC_URL}/${featuredBlockProps.blockType}`;

    expect(wrapper.find('a.featured-block-rct-component').props().href).toEqual(expectedHref);
  });

  it('checks that the right content title was rendered', () => {
    const TITLES = [
      MESSAGES.FEATURED_UPDATED,
      MESSAGES.FEATURED_NEW,
    ];

    expect(wrapper.find('span.title').text()).toEqual(TITLES[+(featuredBlockProps.isNew)]);
  });

  it('checks that the message was correctly rendered', () => {
    expect(wrapper.find('span.description').text()).toEqual(featuredBlockProps.message);
  });
});
