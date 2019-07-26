import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box } from 'rebass';
import './modal-background.scss';

export function ModalBackground(props) {
  const {
    isBigger,
    isModal,
    isVisible,
    onClick,
  } = props;

  return (
    <Box
      as="section"
      className={classNames(
        'modal-background-rct-component',
        isModal,
        isVisible,
        isBigger ? 'bigger' : '',
      )}
      onClick={onClick}
    />
  );
}

ModalBackground.propTypes = {
  isBigger: PropTypes.bool.isRequired,
  isModal: PropTypes.oneOf(['modal', '']).isRequired,
  isVisible: PropTypes.oneOf(['hidden', 'visible']).isRequired,
  onClick: PropTypes.func.isRequired,
};

