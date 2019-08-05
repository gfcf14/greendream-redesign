import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { Flex, Image, Link } from 'rebass';
import classNames from 'classnames';
import {
  FacingMessage,
  Menu,
  MobileMenu,
  ModalForm,
  StatsBar,
} from 'components';
import { ModalBackground } from 'containers';
import { logoImage } from 'images';
import breakpoints from 'styles/_layout.scss';
import { DEFAULT_FORM_CONFIG, FORM_CONFIGS, SIGN_UP_FORM_HEIGHT_MOBILE } from 'utils/constants';
import './main-landing.scss';

const initialStatsBar = {
  statsText: '',
  hasError: false,
  sessionAction: false,
};

export function MainLanding({ contentComponent }) {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(-1);
  const [isBigger, setBigger] = useState(false);
  const [statsBar, setStatsBar] = useState(initialStatsBar);
  const [acceptedCookies, setAcceptCookies] = useState(undefined);
  const [isLoggedIn, setLoggedIn] = useState('');

  useEffect(() => {
    setLoggedIn(Cookies.get('greendream-user') || '');
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
      const modalForm = document.querySelector('.modal-form-rct-component');
      if (modalForm) {
        modalForm.classList.remove('modal');
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
      {contentComponent}
      <ModalBackground
        isBigger={isBigger}
        isModal={modal >= 0 ? 'modal' : ''}
        isVisible={menu || modal >= 0 ? 'visible' : 'hidden'}
        onClick={() => fadeOut()}
      />
      <ModalForm {...modalFormProps} />
      <StatsBar {...statsBarProps} />
      <FacingMessage {...facingMessageProps} />
    </Flex>
  );
}

MainLanding.propTypes = {
  contentComponent: PropTypes.element.isRequired,
};

