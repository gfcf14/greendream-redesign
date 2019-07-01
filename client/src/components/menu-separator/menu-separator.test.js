import React from 'react';
import { MenuSeparator } from 'components';

describe('MenuSeparator Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <MenuSeparator separatorTitle="ACCOUNT" />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the right elements have rendered', () => {
    expect(wrapper.find('div div')).toHaveLength(1);
    expect(wrapper.find('div span')).toHaveLength(1);
  });
});

