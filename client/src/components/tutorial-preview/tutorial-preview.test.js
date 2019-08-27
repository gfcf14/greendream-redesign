import React from 'react';
import { TutorialPreview } from 'components';

describe('TutorialPreview Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <TutorialPreview language="html5" />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that all the blocks are rendered', () => {
    expect(wrapper.find('section.tutorial-block-rct-component')).toHaveLength(3);
  });
});

