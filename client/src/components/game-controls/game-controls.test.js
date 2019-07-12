import React from 'react';
import { GameControls } from 'components';
import { MESSAGES } from 'utils/messages';

describe('GameControls Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <GameControls gameName="whereforetheheckartthou" />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the controls are correct', () => {
    expect(wrapper.find('div.cell-description span').text()).toEqual(MESSAGES.WHEREFORE_THE_HECK_ART_THOU_CONTROLS_MOUSE);
  });
});
