import React from 'react';
import { ProgramSpecs } from 'components';

describe('ProgramSpecs Component Unit Test', () => {
  const programName = 'urlplayer';

  const wrapper = mountWithIntl(
    <ProgramSpecs programName={programName} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
