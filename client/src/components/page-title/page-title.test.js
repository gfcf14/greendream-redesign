import React from 'react';
import { PageTitle } from 'components';
import { meSuccessCartoon } from 'images';

describe('PageTitle Component Unit Test', () => {
  const pageTitleProps = {
    title: 'sample',
    titleImage: meSuccessCartoon,
  };

  const wrapper = mountWithIntl(
    <PageTitle {...pageTitleProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the title correctly', () => {
    expect(wrapper.text()).toEqual(pageTitleProps.title);
  });

  it('renders the image correctly', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('checks the correct order class is set', () => {
    expect(wrapper.find('.page-title-rct-component').first().hasClass('normal')).toBe(true);
  });
});
