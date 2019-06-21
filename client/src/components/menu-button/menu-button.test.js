import React from 'react';
import { MenuButton } from 'components';

describe('MenuButton Component Unit Test', () => {
  const MenuButtonProps = {
    buttonType: 'profile',
    position: 'right',
  };

  const wrapper = mountWithIntl(
    <MenuButton {...MenuButtonProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that there is a logo within', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });
});

