import React from 'react';
import { MenuButton } from 'components';

describe('MenuButton Component Unit Test', () => {
  const menuButtonProps = {
    buttonType: 'profile',
    position: 'right',
    modal: -1,
    toggleModal: jest.fn(),
    showStatsBar: jest.fn(),
  };

  const wrapperNotLoggedIn = mountWithIntl(
    <MenuButton {...menuButtonProps} isLoggedIn="" />
  );

  const wrapperLoggedIn = mountWithIntl(
    <MenuButton {...menuButtonProps} isLoggedIn="gfcf14" />
  );

  it('both wrappers render without crashes', () => {
    expect(wrapperNotLoggedIn.exists()).toBe(true);
    expect(wrapperLoggedIn.exists()).toBe(true);
  });

  it('checks that there is a logo within', () => {
    expect(wrapperNotLoggedIn.find('img')).toHaveLength(1);
    expect(wrapperLoggedIn.find('img')).toHaveLength(1);
  });

  it('checks that the toggleModal function is called', () => {
    wrapperNotLoggedIn.find('button').simulate('click');
    expect(menuButtonProps.toggleModal).toHaveBeenCalled();
  });

  it('checks that the showStatsBar function is called', () => {
    wrapperLoggedIn.find('button').simulate('click');
    expect(menuButtonProps.showStatsBar).toHaveBeenCalled();
  });
});

