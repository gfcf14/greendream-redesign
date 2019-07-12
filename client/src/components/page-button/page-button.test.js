import React from 'react';
import { PageButton } from 'components';

describe('PageButton Component Unit Test', () => {
  const pageButtonProps = {
    buttonText: 'sample',
    isAtHomePage: true,
  };

  const wrapper = mountWithIntl(
    <PageButton {...pageButtonProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the right text', () => {
    expect(wrapper.text()).toEqual(pageButtonProps.buttonText);
  });

  it('renders the correct isAtHomePage value', () => {
    expect(wrapper.find('.page-button-rct-component').hasClass('homepage')).toBe(pageButtonProps.isAtHomePage);
  });
});
