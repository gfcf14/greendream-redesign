import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import classNames from 'classnames';
import { Flex, Image } from 'rebass';
import { cookiesIcon } from 'images';
import { MESSAGES } from 'utils/messages';
import './facing-message.scss';

function acceptCookies(setAcceptCookies) {
  Cookies.set('greendream-accept-cookies', true, { expires: 365 });
  setAcceptCookies(Cookies.get('greendream-accept-cookies'));
}

export function FacingMessage({ acceptedCookie, setAcceptCookies }) {
  return (
    <Flex
      className={classNames(
        'facing-message-rct-component',
        acceptedCookie ? 'hidden' : '',
      )}
    >
      <Flex className="facing-message-rct-component__container">
        <Image
          src={cookiesIcon}
          className="mobile-cookie"
          alt="cookies-image"
        />
        <Flex className="content-container">
          <Flex className="display">
            <span className="text">
              {MESSAGES.FACING_MESSAGE}
            </span>
          </Flex>
          <button
            className="button"
            onClick={() => acceptCookies(setAcceptCookies)}
          >
            {MESSAGES.FACING_MESSAGE_ACCEPT}
          </button>
        </Flex>
        <Image
          src={cookiesIcon}
          className={classNames(
            'mobile-cookie',
            'inverted',
          )}
          alt="cookies-image"
        />
      </Flex>
    </Flex>
  );
}

FacingMessage.propTypes = {
  acceptedCookie: PropTypes.bool,
  setAcceptCookies: PropTypes.func.isRequired,
};

FacingMessage.defaultProps = {
  acceptedCookie: true,
};
