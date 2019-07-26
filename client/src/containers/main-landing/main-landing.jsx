import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, Image, Link } from 'rebass';
import classNames from 'classnames';
import { Menu, MobileMenu, ModalForm } from 'components';
import { ModalBackground } from 'containers';
import { logoImage } from 'images';
import breakpoints from 'styles/_layout.scss';
import { DEFAULT_FORM_CONFIG, FORM_CONFIGS, SIGN_UP_FORM_HEIGHT_MOBILE } from 'utils/constants';
import './main-landing.scss';

export function MainLanding({ contentComponent }) {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(-1);
  const [isBigger, setBigger] = useState(false);
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

  function fadeOut() {
    setMenu(false);
    setModal(-1);
  }

  const menuProps = {
    menu,
    toggleMenu,
    modal,
    toggleModal,
  };

  const modalFormProps = {
    config: modal >= 0 ? FORM_CONFIGS[modal] : DEFAULT_FORM_CONFIG,
    modal,
    fadeOut,
    isBigger,
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
      <MobileMenu {...menuProps} />
      {contentComponent}
      <ModalBackground
        isBigger={isBigger}
        isModal={modal >= 0 ? 'modal' : ''}
        isVisible={menu || modal >= 0 ? 'visible' : 'hidden'}
        onClick={() => fadeOut()}
      />
      <ModalForm {...modalFormProps} />
    </Flex>
  );
}

MainLanding.propTypes = {
  contentComponent: PropTypes.element.isRequired,
};

