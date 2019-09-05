import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { Flex, Image, Link } from 'rebass';
import classNames from 'classnames';
import {
  FacingMessage,
  HomePage,
  Menu,
  MobileMenu,
  ModalForm,
  ModalView,
  StatsBar,
} from 'components';
import { ModalBackground } from 'containers';
import { logoImage } from 'images';
import breakpoints from 'styles/_layout.scss';
import { DEFAULT_FORM_CONFIG, FORM_CONFIGS, SIGN_UP_FORM_HEIGHT_MOBILE } from 'utils/constants';
import { MESSAGES } from 'utils/messages';
import './main-landing.scss';

const initialStatsBar = {
  statsText: '',
  hasError: false,
  sessionAction: false,
};

function isAtHome(contentComponent) {
  return contentComponent.type.toString().includes('HomePage');
}

function renderBasedOnComponent(contentComponent, menu, modal, toggleModal) {
  if (isAtHome(contentComponent)) {
    const homePageProps = {
      menu,
      modal,
      toggleModal,
    };

    return <HomePage {...homePageProps} />;
  }

  return contentComponent;
}

function getComponentName(contentComponent, modal) {
  return isAtHome(contentComponent) && modal === FORM_CONFIGS.length ? 'view' : 'form';
}

export function MainLanding({ contentComponent }) {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(-1);
  const [isBigger, setBigger] = useState(false);
  const [statsBar, setStatsBar] = useState(initialStatsBar);
  const [acceptedCookies, setAcceptCookies] = useState(undefined);
  const [isLoggedIn, setLoggedIn] = useState('waiting');

  useEffect(() => {
    setLoggedIn(Cookies.get('greendream-user') || 'no');
    setAcceptCookies(Cookies.get('greendream-accept-cookies') || false);
  }, []);

  useEffect(() => {
    const resetMenu = () => {
      if (window.innerWidth >= parseInt(breakpoints.md, 10) && menu) {
        setMenu(false);
      }
    };

    if (window.innerHeight < SIGN_UP_FORM_HEIGHT_MOBILE) {
      setBigger(true);
    }

    window.addEventListener('resize', resetMenu);
  }, [menu]);

  function toggleMenu(showMenu) {
    setMenu(showMenu);
  }

  function toggleModal(index) {
    setModal(index);

    if (index >= 0 && menu) {
      setMenu(!menu);
    }
  }

  function showStatsBar(statsText, hasError, sessionAction) {
    setStatsBar({
      statsText,
      hasError,
      sessionAction,
    });
  }

  function hideStatsBar() {
    setStatsBar(initialStatsBar);
  }

  function fadeOut() {
    setMenu(false);

    if (modal !== -1) {
      const componentName = getComponentName(contentComponent, modal);
      const modalComponent = document.querySelector(`.modal-${componentName}-rct-component`);

      if (modalComponent) {
        modalComponent.classList.remove('modal');
        setTimeout(() => {
          setModal(-1);
        }, 350); // should match the transition time in modal-form.scss
      }
    }
  }

  const statsBarProps = {
    ...statsBar,
    hideStatsBar,
  };

  const menuProps = {
    menu,
    toggleMenu,
    modal,
    toggleModal,
    isLoggedIn,
    showStatsBar,
  };

  const mobileMenuProps = {
    ...menuProps,
    fadeOut,
  };

  const modalFormProps = {
    config: modal >= 0 ? FORM_CONFIGS[modal] : DEFAULT_FORM_CONFIG,
    modal,
    fadeOut,
    isBigger,
    showStatsBar,
  };

  const modalViewProps = {
    fadeOut,
    modal,
    title: MESSAGES.FEATURED,
    type: 'featured',
  };

  const facingMessageProps = {
    acceptedCookie: acceptedCookies,
    setAcceptCookies,
  };

  return (
    <Flex as="section" className="main-landing-rct-component">
      <Flex
        as="section"
        className={classNames(
          'main-landing-rct-component__header',
          menu ? 'menu' : '',
        )}
      >
        <Flex as="section" className="background">
          <Link href={`${process.env.PUBLIC_URL}/`}>
            <Image
              src={logoImage}
              className="logo"
              alt="logo"
            />
          </Link>
          <Menu {...menuProps} />
        </Flex>
      </Flex>
      <MobileMenu {...mobileMenuProps} />
      {renderBasedOnComponent(contentComponent, menu, modal, toggleModal)}
      <ModalBackground
        isBigger={isBigger}
        isModal={modal >= 0 ? 'modal' : ''}
        isVisible={menu || modal >= 0 ? 'visible' : 'hidden'}
        onClick={() => fadeOut()}
      />
      <ModalForm {...modalFormProps} />
      <ModalView {...modalViewProps} />
      <StatsBar {...statsBarProps} />
      <FacingMessage {...facingMessageProps} />
    </Flex>
  );
}

MainLanding.propTypes = {
  contentComponent: PropTypes.element.isRequired,
};

