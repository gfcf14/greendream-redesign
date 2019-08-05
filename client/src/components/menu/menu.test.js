import React from 'react';
import { Menu } from 'components';

describe('Menu Component Unit Test', () => {
  const menuProps = {
    menu: false,
    toggleMenu: jest.fn(),
    modal: -1,
    toggleModal: jest.fn(),
    isLoggedIn: 'gfcf14',
    showStatsBar: jest.fn(),
  };

  const wrapper = mountWithIntl(
    <Menu {...menuProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the right elements are rendered', () => {
    expect(wrapper.find('ul')).toHaveLength(2);
    expect(wrapper.find('li')).toHaveLength(9);

    expect(wrapper.find('ContactButton')).toHaveLength(1);
    expect(wrapper.find('div.division')).toHaveLength(1);
    expect(wrapper.find('MenuButton')).toHaveLength(2);
  });
});

