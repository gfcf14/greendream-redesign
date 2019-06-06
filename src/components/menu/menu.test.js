import React from 'react';
import { Menu } from 'components';

describe('Menu Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <Menu />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the right elements are rendered', () => {
    expect(wrapper.find('ul')).toHaveLength(4);
    expect(wrapper.find('li')).toHaveLength(14);

    expect(wrapper.find('ContactButton')).toHaveLength(1);
    expect(wrapper.find('div.division')).toHaveLength(1);
    expect(wrapper.find('MenuButton')).toHaveLength(2);
    expect(wrapper.find('MenuSeparator')).toHaveLength(2);
  });
});

