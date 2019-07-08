import React from 'react';
import { TutorialsPage } from 'components';
import { MESSAGES } from 'utils/messages';

describe('TutorialsPage Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <TutorialsPage />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the right amount of children', () => {
    expect(wrapper.find('p.tutorials-description')).toHaveLength(1);
    expect(wrapper.find('TutorialsTable')).toHaveLength(1);
  });

  it('checks that the right tutorial message is rendered', () => {
    expect(wrapper.find('p.tutorials-description').text()).toEqual(MESSAGES.TUTORIALS);
  });
});

