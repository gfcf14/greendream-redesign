import React from 'react';
import { MenuButton } from 'components';

describe('MenuButton Component Unit Test', () => {
  const menuButtonProps = {
    buttonType: 'profile',
    position: 'right',
    modal: -1,
    toggleModal: jest.fn(),
  };

  const wrapper = mountWithIntl(
    <MenuButton {...menuButtonProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that there is a logo within', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('checks that the toggleModal function is called', () => {
    wrapper.find('img').simulate('click');
    expect(menuButtonProps.toggleModal).toHaveBeenCalled();
  });
});

