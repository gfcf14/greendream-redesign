import React from 'react';
import { NotFound } from 'components';

describe('NotFound Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <NotFound />
  );

  it ('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

