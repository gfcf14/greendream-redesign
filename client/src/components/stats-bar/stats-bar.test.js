import React from 'react';
import { StatsBar } from 'components';

describe('StatsBar Component Unit Test', () => {
  const statsBarProps = {
    statsText: 'TEST',
    hasError: false,
    hideStatsBar: jest.fn(),
    sessionAction: false,
  };

  const wrapper = mountWithIntl(
    <StatsBar {...statsBarProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
