import React from 'react';
import { TableCell } from 'components';
import { whereforeTheHeckArtThouIcon } from 'images';

describe('TableCell Component Unit Test', () => {
  const tablecellProps = {
    cellText: 'sample',
    icon: whereforeTheHeckArtThouIcon,
  };

  const wrapper = mountWithIntl(
    <TableCell {...tablecellProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct cell text', () => {
    expect(wrapper.find('p').text()).toEqual(tablecellProps.cellText);
  });

  it('renders the non-centered class when icon is provided', () => {
    expect(wrapper.find('p').hasClass('non-centered')).toBe(true);
  });
});

