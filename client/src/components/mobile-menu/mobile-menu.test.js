import React from 'react';
import { MobileMenu } from 'components';

describe('MobileMenu Component Unit Test', () => {
  const menuProps = {
    menu: false,
    toggleMenu: jest.fn(),
    modal: -1,
    toggleModal: jest.fn(),
  };
  const wrapper = mountWithIntl(
    <MobileMenu {...menuProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the right elements are rendered', () => {
    expect(wrapper.find('button.close-button')).toHaveLength(1);
    expect(wrapper.find('div.menu-container')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(7);
    expect(wrapper.find('MenuSeparator')).toHaveLength(2);
  });
});

