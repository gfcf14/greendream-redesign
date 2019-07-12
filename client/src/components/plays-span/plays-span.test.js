import React from 'react';
import { PlaysSpan } from 'components';

describe('PlaysSpan Component Unit Test', () => {
  const playsNumber = 99;

  const wrapper = mountWithIntl(
    <PlaysSpan playsNumber={playsNumber} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the right number of plays', () => {
    expect(wrapper.find('.plays-span-rct-component__count').text()).toEqual(playsNumber.toString());
  });
});
