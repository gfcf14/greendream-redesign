import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Link } from 'rebass';
import {
  MAX_TUTORIAL_BLOCK_ELEMENT_HEIGHT as maxHeight,
  MIN_TUTORIAL_BLOCK_ELEMENT_HEIGHT as minHeight,
  MAX_WINDOW_WIDTH,
  MIN_WINDOW_WIDTH,
  TUTORIAL_LISTS,
} from 'utils/constants';

import { PRACTICE_PATHS, TRICK_PATHS, TUTORIAL_PATHS } from 'utils/routes';
import './tutorial-block.scss';

function fluidElementHeight(min, max, windowWidth) {
  const widthDifference = MAX_WINDOW_WIDTH - MIN_WINDOW_WIDTH;

  return min + (max - min) * ((windowWidth - MIN_WINDOW_WIDTH) / widthDifference);
}

function getBlockHeight(blockName, isExpanded, language, windowWidth) {
  const currentTutorialBlock = TUTORIAL_LISTS[`${language}`][`${blockName}`];
  const computedHeight = isExpanded ?
    currentTutorialBlock.length * fluidElementHeight(minHeight, maxHeight, windowWidth) : 0;

  return {
    height: `${computedHeight}px`,
  };
}

function renderTutorialList(language, blockName) {
  return TUTORIAL_LISTS[`${language}`][`${blockName}`].map((element, i, arr) => {
    const { key, value } = element;
    const pathGroup = {
      practice: PRACTICE_PATHS,
      tricks: TRICK_PATHS,
      tutorials: TUTORIAL_PATHS,
    };
    const specifiedPath = pathGroup[`${blockName}`][`${language}`][i].value;

    return (
      <Link
        key={key}
        className={classNames(
          'element-container',
          i % 2 === 0 ? 'even' : 'odd',
          arr.length - 1 === i ? 'last' : '',
        )}
        href={`${process.env.PUBLIC_URL}/${blockName}/${language}/${specifiedPath}`}
      >
        <span className="element">
          {value}
        </span>
      </Link>
    );
  });
}

export function TutorialBlock(props) {
  const {
    blockName,
    isCenter,
    language,
    text,
  } = props;

  const [isExpanded, setExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const getWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    getWidth();
    window.addEventListener('resize', getWidth);
  }, []);
  return (
    <Flex
      as="section"
      className={classNames(
        'tutorial-block-rct-component',
        isCenter ? 'with-margins' : '',
      )}
    >
      <span
        className={classNames(
          'tutorial-block-rct-component__title',
          isExpanded ? 'expanded' : '',
        )}
      >
        {text}
      </span>
      <Flex
        className={classNames(
          'tutorial-block-rct-component__button-container',
          isExpanded ? 'expanded' : '',
        )}
        onClick={() => setExpanded(!isExpanded)}
      >
        <span className="button">
          {isExpanded ? '-' : '+'}
        </span>
      </Flex>
      <Flex
        className="tutorial-block-rct-component__block-list"
        style={getBlockHeight(blockName, isExpanded, language, windowWidth)}
      >
        {renderTutorialList(language, blockName)}
      </Flex>
    </Flex>
  );
}

TutorialBlock.propTypes = {
  blockName: PropTypes.string.isRequired,
  isCenter: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
