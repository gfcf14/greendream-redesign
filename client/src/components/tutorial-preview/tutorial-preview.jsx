import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { TutorialBlock } from 'components';
import { TUTORIAL_BLOCK_TITLES, TUTORIAL_TABLE_MESSAGES } from 'utils/constants';
import { MESSAGES } from 'utils/messages';
import './tutorial-preview.scss';

function renderTutorialBlocks(language) {
  return TUTORIAL_BLOCK_TITLES.map((blockTitle) => {
    const { key, text } = blockTitle;
    let blockName = '';

    switch (text) {
      case MESSAGES.TUTORIAL_BLOCKS_PRACTICE:
        blockName = 'practice';
        break;
      case MESSAGES.TUTORIAL_BLOCKS_TRICKS:
        blockName = 'tricks';
        break;
      case MESSAGES.TUTORIAL_BLOCKS_TUTORIALS:
        blockName = 'tutorials';
        break;
      default:
        blockName = '';
        break;
    }

    const tutorialBlockProps = {
      blockName,
      isCenter: text === MESSAGES.TUTORIAL_BLOCKS_TRICKS,
      language,
      text,
    };

    return <TutorialBlock key={key} {...tutorialBlockProps} />;
  });
}

export function TutorialPreview({ language }) {
  return (
    <Flex as="section" className="tutorial-preview-rct-component">
      <span className="tutorial-preview-rct-component__description-text">
        {TUTORIAL_TABLE_MESSAGES[`${language}`]}
      </span>
      <Flex as="section" className="tutorial-preview-rct-component__blocks-container">
        {renderTutorialBlocks(language)}
      </Flex>
    </Flex>
  );
}

TutorialPreview.propTypes = {
  language: PropTypes.string.isRequired,
};
