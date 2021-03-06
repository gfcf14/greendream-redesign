import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex } from 'rebass';
import './stats-bar.scss';

let statsBar = '';

function hideFromView(hideStatsBar, sessionAction) {
  statsBar = document.querySelector('.stats-bar-rct-component');

  if (statsBar) {
    const { opacity, width } = window.getComputedStyle(statsBar);
    const statsOpacity = parseInt(opacity, 10);
    const statsWidth = parseInt(width, 10);

    if (statsOpacity === 1 && statsWidth > 0) {
      if (sessionAction) {
        window.location.reload();
      }

      statsBar.classList.add('should-fade');
    } else if (statsOpacity === 0 && statsWidth > 0) {
      statsBar.classList.remove('open');
      setTimeout(() => {
        statsBar.classList.remove('should-fade');
        hideStatsBar();
      }, 1000); // should match the transition time in stats-bar.scss
    }
  }
}

export function StatsBar(props) {
  const {
    statsText,
    hasError,
    hideStatsBar,
    sessionAction,
  } = props;

  return (
    <Flex
      className={classNames(
        'stats-bar-rct-component',
        statsText ? 'open' : '',
        hasError ? 'error' : '',
      )}
      onTransitionEnd={() => hideFromView(hideStatsBar, sessionAction)}
    >
      <span className="stats-bar-rct-component__stats-text">
        {statsText}
      </span>
    </Flex>
  );
}

StatsBar.propTypes = {
  statsText: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  hideStatsBar: PropTypes.func.isRequired,
  sessionAction: PropTypes.bool.isRequired,
};
