import React from 'react';
import { MenuItem } from 'components';

describe('MenuItem Component Unit Test', () => {
  const MenuItemProps = {
    itemName: 'sample',
    itemPath: '/sample',
    itemType: 'desktop',
  };

  const wrapper = mountWithIntl(
    <MenuItem {...MenuItemProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the text is rendered correctly', () => {
    expect(wrapper.text()).toEqual(MenuItemProps.itemName);
  });

  it('checks that the path is rendered correctly', () => {
    const expectedPath = `${process.env.PUBLIC_URL}${MenuItemProps.itemPath}`;

    expect(wrapper.find('a').props().href).toEqual(expectedPath);
  });

  it('checks that the type is rendered correctly', () => {
    expect(wrapper.find('a').hasClass(MenuItemProps.itemType)).toBe(true);
  });
});

