import React, { useEffect, useState } from 'react';
import { Flex, Image, Link } from 'rebass';
import queryString from 'query-string';
import classNames from 'classnames';
import { ExternalForm } from 'components';
import { logoImage } from 'images';
import { EXTERNAL_SITE_CONFIGS } from 'utils/constants';
import { activateAccount, checkExpiry, getImageSource } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './external-landing.scss';

function getSiteConfig(siteType) {
  return EXTERNAL_SITE_CONFIGS[`${siteType}`];
}

function isNotValid(siteKey) {
  return ['empty', 'expired', 'invalid'].includes(siteKey);
}

function shouldHide(siteType, isSubmitted, siteKey) {
  return siteType !== 'confirm' && isSubmitted === 'no' && !isNotValid(siteKey);
}

function shouldGetHeight(siteType, isSubmitted, siteKey) {
  return siteType === 'confirm' || isSubmitted !== 'no' || isNotValid(siteKey);
}

function getDataFromConfig(siteConfig, siteKey, dataType, isSubmitted) {
  if (siteKey && dataType === 'subtitle') {
    return MESSAGES.EXTERNAL_MESSAGE_PASSWORD_SUBTITLE;
  }

  if (isSubmitted && !siteKey) {
    return siteConfig[`${dataType}`][`${isSubmitted}`];
  }

  if (siteConfig) {
    return siteKey !== '' ? siteConfig[`${siteKey}`][`${dataType}`] : siteConfig[`${dataType}`];
  }

  return dataType === 'image' ? '#' : '';
}

function getDataForMessage(siteType, siteConfig, siteKey, isSubmitted, formError) {
  if (formError) {
    return MESSAGES.EXTERNAL_FORM_FAIL;
  }

  if (siteType === 'confirm') {
    return getDataFromConfig(siteConfig, siteKey, 'message');
  }

  return isSubmitted !== 'no' || isNotValid(siteKey) ?
    getDataFromConfig(siteConfig, siteKey, 'message', isSubmitted) : null;
}

function renderExternalForm(externalFormParams) {
  const {
    isSubmitted,
    siteType,
    setFormError,
    setSubmitted,
    siteKey,
    passwordToken,
  } = externalFormParams;

  if (isSubmitted !== 'no') {
    return null;
  }

  const externalFormProps = {
    configKey: siteType,
    setFormError,
    setSubmitted,
    passwordToken,
  };

  return ['change', 'recovery'].includes(siteType) && !isNotValid(siteKey) ?
    <ExternalForm {...externalFormProps} /> : null;
}

export function ExternalLanding() {
  const [siteTitle, setSiteTitle] = useState('');
  const [siteKey, setSiteKey] = useState('');
  const [siteType, setSiteType] = useState('');
  const [siteConfig, setSiteConfig] = useState('');
  const [formError, setFormError] = useState(false);
  const [isSubmitted, setSubmitted] = useState('no');
  const [passwordToken, setPasswordToken] = useState('');

  useEffect(() => {
    async function setStateProps() {
      const pageParams = window.location.href;
      const parsedQueries = queryString.parse(pageParams.split('?')[1]);

      if (pageParams.includes('change')) {
        setSiteTitle(MESSAGES.EXTERNAL_TITLE_CHANGE);
        setSiteKey(await checkExpiry(parsedQueries['token']));
        setPasswordToken(parsedQueries['token']);
        setSiteConfig(getSiteConfig('change'));
        setSiteType('change');
      } else if (pageParams.includes('confirm')) {
        setSiteTitle(MESSAGES.EXTERNAL_TITLE_CONFIRM);
        setSiteKey(await activateAccount(parsedQueries['code']));
        setSiteConfig(getSiteConfig('confirm'));
        setSiteType('confirm');
      } else { // for recovery
        setSiteTitle(MESSAGES.EXTERNAL_TITLE_RECOVERY);
        setSiteConfig(getSiteConfig('recovery'));
        setSiteType('recovery');
      }
    }

    setStateProps();
  }, []);

  const externalFormParams = {
    isSubmitted,
    siteType,
    setFormError,
    setSubmitted,
    siteKey,
    passwordToken,
  };

  return (
    <Flex className="external-landing-rct-component">
      <Link
        className="external-landing-rct-component__logo"
        href={`${process.env.PUBLIC_URL}/`}
      >
        <Image
          src={logoImage}
          className="logo-image"
          alt="logo"
        />
      </Link>
      <h2 className="external-landing-rct-component__title">{siteTitle}</h2>
      <span
        className={classNames(
          'external-landing-rct-component__subtitle',
          siteType === 'confirm' || isNotValid(siteKey) ? 'hidden' : '',
        )}
      >
        {getDataFromConfig(siteConfig, siteKey, 'subtitle')}
      </span>
      <Flex
        className={classNames(
          'external-landing-rct-component__content',
          formError ? 'error' : '',
          shouldGetHeight(siteType, isSubmitted, siteKey) ? 'with-height' : '',
        )}
      >
        <span
          className={classNames(
            'message',
            shouldHide(siteType, isSubmitted, siteKey) ? 'hidden' : '',
          )}
        >
          {getDataForMessage(siteType, siteConfig, siteKey, isSubmitted, formError)}
        </span>
        <Flex
          className={classNames(
            'form-container',
            siteType === 'confirm' ? 'hidden' : '',
          )}
        >
          {renderExternalForm(externalFormParams)}
        </Flex>
        <Link
          className={classNames(
            'site-button-container',
            shouldHide(siteType, isSubmitted, siteKey) ? 'hidden' : '',
          )}
          href={`${process.env.PUBLIC_URL}/`}
        >
          <button className="site-button">
            {MESSAGES.EXTERNAL_GO_TO_SITE}
          </button>
        </Link>
      </Flex>
      <Image
        src={siteConfig ? getImageSource(getDataFromConfig(siteConfig, siteKey, 'image')) : null}
        className="external-landing-rct-component__background-image"
        alt="background-image"
      />
    </Flex>
  );
}
