import React from 'react';
import { TutorialBlock } from 'components';
import { TUTORIAL_LISTS } from 'utils/constants';

describe('TutorialBlock Component Unit Test', () => {
  const tutorialBlockProps = {
    blockName: 'tricks',
    isCenter: true,
    language: 'html5',
    text: 'TRICKS',
  };

  const wrapper = mountWithIntl(
    <TutorialBlock {...tutorialBlockProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the right amount of elements is present', () => {
    const { language, blockName } = tutorialBlockProps;
    const elementLength = TUTORIAL_LISTS[`${language}`][`${blockName}`].length;

    expect(wrapper.find('.element')).toHaveLength(elementLength);
  });
});

